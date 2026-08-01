import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 flex items-center justify-center p-4">
      
      {/* کارت اصلی با انیمیشن ورود */}
      <div className="bg-indigo-300 rounded-2xl shadow-2xl p-8 w-full max-w-md border-2 border-indigo-400
                animate-[fadeIn_0.5s_ease-out] hover:shadow-2xl transition-shadow duration-300">
        
        {/* عنوان */}
        <h2 className="text-center text-slate-600 text-sm font-medium mb-2 tracking-wide">
          COUNTER APP
        </h2>

        {/* نمایش عدد با انیمیشن Pop */}
        <div className="text-center mb-8">
          <h1
            key={count} // این باعث می‌شه هر بار عدد عوض بشه انیمیشن دوباره اجرا بشه
            className="text-6xl font-bold text-slate-800 tracking-tight
                       animate-[pop_0.3s_ease-out]"
          >
            {count}
          </h1>
          <p className="text-slate-500 text-sm mt-1">Current Value</p>
        </div>

        {/* دکمه‌های افزایش */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">
            Increase
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 5, 10].map((value) => (
              <button
                key={value}
                onClick={() => dispatch({ type: "INCREASE", payload: value })}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl
                           transition-all duration-200 shadow-sm
                           hover:-translate-y-1 hover:shadow-lg
                           active:scale-95 active:translate-y-0"
              >
                +{value}
              </button>
            ))}
          </div>
        </div>

        {/* دکمه‌های کاهش */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wider">
            Decrease
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[1, 5, 10].map((value) => (
              <button
                key={value}
                onClick={() => dispatch({ type: "DECREASE", payload: value })}
                className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-xl
                           transition-all duration-200 shadow-sm
                           hover:-translate-y-1 hover:shadow-lg
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
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3.5 rounded-xl
                     transition-all duration-200 shadow-sm
                     hover:-translate-y-1 hover:shadow-lg
                     active:scale-[0.98] active:translate-y-0"
        >
          RESET
        </button>
      </div>

      {/* استایل‌های انیمیشن سفارشی */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(10px);
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
            50% {
              transform: scale(1.15);
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