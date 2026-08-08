import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/CreateAction";

import {
  addMilk,
  removeMilk,
  toggleLowFat,
  resetMilk,
} from "./redux/milk/MilkAction";

function App() {
  const counterCount = useSelector((state) => state.counter.count);

  const {
    count: milkCount,
    price,
    isLowFat,
  } = useSelector((state) => state.milk);

  const dispatch = useDispatch();

  const totalPrice = milkCount * price;

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 sm:px-6">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            Redux State Management
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            Redux Control Center
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Counter & Milk Management Dashboard
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Counter Card */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300">
                  Counter
                </p>

                <h2 className="mt-1 text-xl font-bold">Counter Control</h2>
              </div>

              <div className="rounded-2xl bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-300">
                Redux
              </div>
            </div>

            {/* Counter Value */}
            <div className="mb-6 flex justify-center">
              <div className="flex h-40 w-40 flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-xl">
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  Current
                </span>

                <span
                  key={counterCount}
                  className="mt-1 text-6xl font-black tracking-tight text-white"
                >
                  {counterCount}
                </span>
              </div>
            </div>

            {/* Increase */}
            <div className="mb-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                Increase
              </p>

              <div className="grid grid-cols-3 gap-3">
                {[1, 5, 10].map((value) => (
                  <button
                    key={value}
                    onClick={() => dispatch(increment(value))}
                    className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 py-3 font-bold text-emerald-300 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-500/20 active:scale-95"
                  >
                    +{value}
                  </button>
                ))}
              </div>
            </div>

            {/* Decrease */}
            <div className="mb-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                Decrease
              </p>

              <div className="grid grid-cols-3 gap-3">
                {[1, 5, 10].map((value) => (
                  <button
                    key={value}
                    onClick={() => dispatch(decrement(value))}
                    className="rounded-2xl border border-rose-400/20 bg-rose-500/10 py-3 font-bold text-rose-300 transition duration-200 hover:-translate-y-0.5 hover:bg-rose-500/20 active:scale-95"
                  >
                    -{value}
                  </button>
                ))}
              </div>
            </div>

            {/* Counter Reset */}
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 font-bold text-slate-300 transition hover:bg-white/10 active:scale-[0.98]"
            >
              Reset Counter
            </button>
          </section>

          {/* Milk Card */}
          <section className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Milk
                </p>

                <h2 className="mt-1 text-xl font-bold">Milk Management</h2>
              </div>

              <div className="rounded-2xl bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-300">
                {isLowFat ? "Low Fat" : "Regular"}
              </div>
            </div>

            {/* Milk Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-xs text-slate-500">Milk Count</p>

                <p className="mt-1 text-3xl font-black text-white">
                  {milkCount}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="text-xs text-slate-500">Price / Milk</p>

                <p className="mt-1 text-xl font-black text-white">
                  {price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Total Price */}
            <div className="mt-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300/70">
                    Total Price
                  </p>

                  <p className="mt-1 text-3xl font-black text-white">
                    {totalPrice.toLocaleString()}
                  </p>
                </div>

                <span className="text-sm font-bold text-cyan-300">تومان</span>
              </div>
            </div>

            {/* Milk Controls */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                Quantity
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => dispatch(addMilk(1))}
                  className="rounded-2xl border border-blue-400/20 bg-blue-500/10 py-3.5 font-bold text-blue-300 transition hover:-translate-y-0.5 hover:bg-blue-500/20 active:scale-95"
                >
                  + Add Milk
                </button>

                <button
                  onClick={() => dispatch(removeMilk(1))}
                  className="rounded-2xl border border-orange-400/20 bg-orange-500/10 py-3.5 font-bold text-orange-300 transition hover:-translate-y-0.5 hover:bg-orange-500/20 active:scale-95"
                >
                  − Remove Milk
                </button>
              </div>
            </div>

            {/* Low Fat */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">Low Fat Milk</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Toggle milk type
                  </p>
                </div>

                <button
                  onClick={() => dispatch(toggleLowFat())}
                  className={`relative h-7 w-12 rounded-full transition ${
                    isLowFat ? "bg-cyan-500" : "bg-slate-700"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                      isLowFat ? "left-6" : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Reset Milk */}
            <button
              onClick={() => dispatch(resetMilk())}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 font-bold text-slate-300 transition hover:bg-white/10 active:scale-[0.98]"
            >
              Reset Milk
            </button>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-slate-600">
          React + Redux • State Management Practice
        </footer>
      </main>
    </div>
  );
}

export default App;
