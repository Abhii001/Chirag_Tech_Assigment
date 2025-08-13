function Button() {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
}