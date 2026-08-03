import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/CreateAction";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-6">
      {/* کارت اصلی */}
      <div
        className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 p-8
        animate-[fadeIn_0.6s_ease-out]"
      >
        {/* هدر */}
        <div className="text-center mb-8">
          <p className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            React Redux
          </p>
          <h2 className="text-white text-xl font-bold tracking-wide">
            Counter Application
          </h2>
        </div>

        {/* نمایش عدد */}
        <div className="flex justify-center mb-10">
          <div
            className="bg-white/90 backdrop-blur-md rounded-2xl px-10 py-6 shadow-lg border border-white/50
            min-w-[160px] text-center"
          >
            <h1
              key={count}
              className="text-6xl font-extrabold tracking-tighter
              bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
              bg-clip-text text-transparent
              animate-[pop_0.35s_ease-out]"
            >
              {count}
            </h1>

            <p className="text-slate-500 text-xs font-medium mt-1 tracking-wide">
              CURRENT VALUE
            </p>
          </div>
        </div>

        {/* دکمه‌های افزایش */}
        <div className="mb-6">
          <p className="text-white/90 text-xs font-semibold mb-3 tracking-wider uppercase text-center">
            Increase
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[1, 5, 10].map((value) => (
              <button
                key={value}
                onClick={() => dispatch(increment(value))}
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-2xl
                transition-all duration-300 shadow-lg shadow-emerald-500/30
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/40
                active:scale-95 active:translate-y-0"
              >
                +{value}
              </button>
            ))}
          </div>
        </div>

        {/* دکمه‌های کاهش */}
        <div className="mb-8">
          <p className="text-white/90 text-xs font-semibold mb-3 tracking-wider uppercase text-center">
            Decrease
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[1, 5, 10].map((value) => (
              <button
                key={value}
                onClick={() => dispatch(decrement(value))}
                className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-3.5 rounded-2xl
                transition-all duration-300 shadow-lg shadow-rose-500/30
                hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose-500/40
                active:scale-95 active:translate-y-0"
              >
                -{value}
              </button>
            ))}
          </div>
        </div>

        {/* دکمه ریست */}
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="w-full bg-slate-900/90 hover:bg-slate-800 text-white font-semibold py-4 rounded-2xl
          transition-all duration-300 shadow-lg
          hover:-translate-y-1 hover:shadow-xl
          active:scale-[0.98] active:translate-y-0
          border border-white/10"
        >
          RESET
        </button>
      </div>

      {/* انیمیشن‌ها */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.92) translateY(20px);
            }

            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes pop {
            0% {
              transform: scale(1);
            }

            40% {
              transform: scale(1.18);
            }

            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;