function obterIdProduto() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

async function detalharProduto() {
    const idProduto = obterIdProduto();
    console.log(idProduto);
    const baseUrl = "http://localhost:3000";
    
    const res = await fetch(`${baseUrl}/produtos/${idProduto}`);
    const produto = await res.json();


    const container = document.getElementById("produto-detalhado");
    container.innerHTML = `
         <div class="row">
            <!--Coluna das imagens menores dos produtos-->
                <div class="col-12 col-md-1">
                    <img src="${produto.imgsmall0}" class="img-thumbnail">
                    <img src="${produto.imgsmall1}"class="img-thumbnail">
                    <img src="${produto.imgsmall2}"class="img-thumbnail">
                </div>
                <!--Coluna da imagem do produto-->
                <div class="col-12 col-md-5 ">
                    <img src="${produto.imgG}" class="img-thumbnail">
                </div>
                <!--Coluna das descrições do produto-->
                <div class="col-12 col-md-6">
                    <div class="display-flex">
                        <h3>${produto.titulo}</h3>
                        <div class="position-absolute p-2 icone">
                            <i class="bi-suit-heart heart px-3"></i>
                            <i class="bi bi-box-arrow-up-right"></i>
                        </div>
                    </div>
                    <div>
                        <p>${produto.preco}</p>
                    </div>
                    <div>
                        <p>${produto.descricao}</p>
                    </div>
                    <div>
                        <p class="text-muted">Cores</p>
                        <button type="button" class="btn roxo circle"></button>
                        <button type="button" class="btn azul circle"></button>
                    </div>
                    <div>
                        <p class="text-muted">Tamanhos</p>
                        <button type="button" class="btn btn-outline-dark tamanho">XG</button>
                        <button type="button" class="btn btn-outline-dark tamanho">GG</button>
                        <button type="button" class="btn btn-outline-dark tamanho">G</button>
                        <button type="button" class="btn btn-outline-dark tamanho">M</button>
                        <button type="button" class="btn btn-outline-dark tamanho">P</button>
                        <button type="button" class="btn btn-outline-dark tamanho">PP</button>
                    </div>
                    <div>
                        <p>Guia de tamanhos e ajuste</p>
                    </div>
                    <div>
                        <p>Altura do modelo: 170cm. / Tamanho 38</p>
                    </div>
                    <div class="display-flex aling-items-center mb-5 ">
                        <div>
                            <button class="btn btn-dark botao m-3" type="button">Adicionar ao carrinho -
                                ${produto.preco}</button>
                        </div>
                        <div class="justify-content-end">
                            <label for="quantidade" class="form-label m-0">Quantidade</label>
                            <input type="number" class="form-control" id="quantidade">
                        </div>
                    </div>
                </div>
            </div>
    `;
}
detalharProduto();