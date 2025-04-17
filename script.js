const produtos = [
    { nome: "Ovo Caribe", foto: "ovo_carbie.webp", preco: 59.90 },
    { nome: "Ovo Bis", foto: "ovo_bis.webp", preco: 199.90 },
    { nome: "Ovo Lacta", foto: "ovo_lacta.webp", preco: 149.00 },
    { nome: "Ovo Oreo", foto: "ovo_oreo.webp", preco: 39.90 },
    { nome: "Ovo Diamante Negro", foto: "ovo_diamate.webp", preco: 129.50 }
  ];
  
  const container = document.getElementById("produtos");
  
  const selecionados = [0, 2, 4]; 
  
  selecionados.forEach(indice => {
    const produto = produtos[indice];
  
    const caixa = document.createElement("div");
    caixa.className = "produto";
  
    caixa.innerHTML = `
      <img src="${produto.foto}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
    `;
  
    container.appendChild(caixa);
  });
  