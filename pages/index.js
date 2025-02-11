import React from "react";

function Home() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 text-white text-center p-4"
      align="center"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        📚 Projeto <span className="text-yellow-300">Releitura.com.br</span>
      </h1>
      <p className="text-lg md:text-xl max-w-2xl">
        Um espaço dedicado para compartilhar opiniões sobre livros, quadrinhos,
        revistas e muito mais!
      </p>
      <h2 className="text-2xl md:text-3xl mt-6 animate-pulse">
        🚧 Em construção... 🔨
      </h2>
    </div>
  );
}

export default Home;
