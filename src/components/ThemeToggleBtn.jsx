const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <div className="flex items-center gap-4">
      <p className="text-[var(--text-input-color)] uppercase mr-2 mt-[1rem] font-bold tracking-wide text-sm">
        theme
      </p>
      <div className="flex flex-col items-end">
        <div className="flex gap-4 text-[var(--text-input-color)] text-sm font-bold tracking-widest px-2 pb-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div className="flex bg-[var(--color-bg-toggle)] rounded-full p-1">
          {[1, 2, 3].map((num) => {
            const themeName = `theme-${num}`;
            return (
              <button
                key={num}
                onClick={() => setTheme(themeName)}
                className={`w-6 h-6 rounded-full
            ${
              theme === themeName
                ? "bg-[var(--color-key-bg-accent)]"
                : "bg-transparent"
            }
          `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
