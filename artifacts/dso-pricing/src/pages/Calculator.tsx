import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NAVY = "#0F0F0F";
const ORANGE = "#DD042A";

interface Product {
  id: string;
  name: string;
  unit: string;
  dsoPrice: number;
  defaultQty: number;
  defaultPrice: number;
}

const PRODUCTS: Product[] = [
  { id: "nitrile", name: "Nitrile Gloves", unit: "Box of 100", dsoPrice: 2.80, defaultQty: 8, defaultPrice: 12 },
  { id: "mask", name: "ASTM Level 3 Disposable Face Mask", unit: "Box of 50", dsoPrice: 4.80, defaultQty: 7, defaultPrice: 10 },
  { id: "pouch", name: "Self-Sealing Sterilization Pouch, 3.5\" x 9\"", unit: "Box of 200", dsoPrice: 5.04, defaultQty: 3, defaultPrice: 30 },
  { id: "ejector", name: "Disposable Saliva Ejector, One Size", unit: "Box of 100", dsoPrice: 2.16, defaultQty: 5, defaultPrice: 7 },
  { id: "crown", name: "Full Zirconia Crown", unit: "", dsoPrice: 58, defaultQty: 12, defaultPrice: 150 },
  { id: "itero", name: "iTero Subscription", unit: "", dsoPrice: 180, defaultQty: 1, defaultPrice: 360 },
  { id: "invisalign", name: "Invisalign Comprehensive 3x3", unit: "", dsoPrice: 1424.50, defaultQty: 5, defaultPrice: 1925 },
];

interface RowState {
  qty: string;
  price: string;
}

function getDefaults(): Record<string, RowState> {
  const defaults: Record<string, RowState> = {};
  PRODUCTS.forEach((p) => {
    defaults[p.id] = { qty: String(p.defaultQty), price: String(p.defaultPrice) };
  });
  return defaults;
}

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function Calculator() {
  const [rows, setRows] = useState<Record<string, RowState>>(getDefaults());

  function update(id: string, field: "qty" | "price", value: string) {
    setRows((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  }

  function reset() {
    setRows(getDefaults());
  }

  const calcs = PRODUCTS.map((p) => {
    const qty = Math.max(0, parseFloat(rows[p.id].qty) || 0);
    const price = Math.max(0, parseFloat(rows[p.id].price) || 0);
    const savingsPerUnit = Math.max(0, price - p.dsoPrice);
    const pctSavings = price > 0 ? savingsPerUnit / price : 0;
    const annualized = savingsPerUnit * qty * 12;
    return { qty, price, savingsPerUnit, pctSavings, annualized };
  });

  const totalMonthly = calcs.reduce((sum, c) => sum + c.savingsPerUnit * c.qty, 0);
  const totalAnnual = calcs.reduce((sum, c) => sum + c.annualized, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-16 px-6" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-black uppercase tracking-widest mb-4" style={{ color: ORANGE }}>See Your Savings</p>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-4" style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}>
            Cost Savings<br /><span style={{ color: ORANGE }}>Calculator</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Enter your monthly quantities and current prices to see how much DSO Pricing could save your practice.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-12 px-4 md:px-6 bg-white flex-1">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* TABLE */}
            <div className="flex-1 w-full overflow-x-auto">
              <table className="w-full border-collapse" style={{ minWidth: 640 }}>
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 pr-4 text-sm font-bold text-gray-900 w-48">Product</th>
                    <th className="text-center py-3 px-3 text-sm font-bold w-28" style={{ color: ORANGE }}>Monthly<br />Quantity</th>
                    <th className="text-center py-3 px-3 text-sm font-bold w-32" style={{ color: ORANGE }}>Your Price</th>
                    <th className="text-center py-3 px-3 text-sm font-bold w-28" style={{ color: ORANGE }}>Monthly $<br />Savings</th>
                    <th className="text-center py-3 px-3 text-sm font-bold w-28" style={{ color: ORANGE }}>Monthly %<br />Savings</th>
                    <th className="text-center py-3 px-3 text-sm font-bold w-32" style={{ color: ORANGE }}>Annualized<br />Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((product, i) => {
                    const c = calcs[i];
                    return (
                      <tr key={product.id} className="border-b border-gray-100">
                        <td className="py-5 pr-4">
                          <p className="font-semibold text-gray-900 text-sm leading-snug">{product.name}</p>
                          {product.unit && <p className="text-gray-400 text-xs mt-0.5">{product.unit}</p>}
                        </td>
                        <td className="py-5 px-3 text-center">
                          <input
                            type="number"
                            min="0"
                            value={rows[product.id].qty}
                            onChange={(e) => update(product.id, "qty", e.target.value)}
                            className="w-20 h-10 text-center border-2 border-gray-200 rounded-md text-gray-900 font-medium text-sm focus:border-red-400 focus:outline-none"
                          />
                        </td>
                        <td className="py-5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            <span className="text-gray-500 text-sm font-medium">$</span>
                            <input
                              type="number"
                              min="0"
                              step="0.01"
                              value={rows[product.id].price}
                              onChange={(e) => update(product.id, "price", e.target.value)}
                              className="w-24 h-10 text-center border-2 border-gray-200 rounded-md text-gray-900 font-medium text-sm focus:border-red-400 focus:outline-none"
                            />
                          </div>
                        </td>
                        <td className="py-5 px-3 text-center">
                          <span className="font-bold text-gray-900 text-sm">{fmt(c.savingsPerUnit)}</span>
                        </td>
                        <td className="py-5 px-3 text-center">
                          <span className="font-bold text-gray-900 text-sm">{Math.round(c.pctSavings * 100)}%</span>
                        </td>
                        <td className="py-5 px-3 text-center">
                          <span className="font-black text-sm" style={{ color: ORANGE }}>{fmt(c.annualized)}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* RESET */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-80"
                  style={{ backgroundColor: NAVY }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            {/* SAVINGS SUMMARY */}
            <div className="lg:w-56 w-full shrink-0">
              <div className="rounded-2xl p-6 border-2 sticky top-36" style={{ borderColor: ORANGE, backgroundColor: "#fff8f8" }}>
                <p className="font-black text-gray-900 text-base uppercase tracking-wide mb-4">Savings Summary</p>

                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Total Monthly Savings</p>
                <p className="font-black text-3xl mb-5" style={{ color: ORANGE }}>{fmt(totalMonthly)}</p>

                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Total Annual Savings</p>
                <p className="font-black text-3xl mb-5" style={{ color: ORANGE }}>{fmt(totalAnnual)}</p>

                <p className="text-gray-600 text-sm leading-snug mb-5">
                  Imagine the savings across your entire supply list.
                </p>

                <Button asChild size="lg" className="w-full text-white font-bold text-sm" style={{ backgroundColor: NAVY }}>
                  <a href="https://link.elijahdesmond.com/widget/booking/qRepUNdAesl5YtZoT17b" target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* DISCLAIMER */}
          <p className="mt-8 text-gray-400 text-xs leading-relaxed italic">
            * This estimate represents a limited sample of potential savings and is provided for illustrative purposes only. Actual savings will vary and are not guaranteed. Results depend on vendor usage, purchasing volume, participation, and other factors. Pricing and discounts are subject to change and may vary by vendor.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
