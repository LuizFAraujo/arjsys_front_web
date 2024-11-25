# Estrutura de Pastas e Arquivos

Este documento descreve a estrutura das pastas e arquivos do projeto ArjSys.
Ele fornece uma visão geral de como o código está organizado em camadas e módulos, explicando a função de cada pasta.

SYS/
│
├── node_modules/
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Content.tsx
│   │   └── Footer.tsx
│   ├── contexts/
│   │   ├── FooterContext.tsx
│   │   ├── SidebarConfigContext.tsx
│   │   └── SidebarContext.tsx
│   ├── hooks/
│   │   ├── useFooterContext.tsx
│   │   ├── useSidebarConfigContext.tsx
│   │   └── useSidebarContext.tsx
│   ├── layouts/
│   │   ├── _partials/
│   │   │   ├── Content.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── SidebarConfig.tsx
│   │   └── BaseLayout.tsx
│   ├── pages/
│   │   ├── EmConstrucao/
│   │   │   └── EmConstrucao.tsx
│   │   ├── NotFound/
│   │   │   └── NotFound.tsx
│   │   ├── Home.tsx
│   │   └── (outras páginas e pastas)
│   ├── routes/
│   │   ├── AppRoutes.tsx
│   │   └── (rotas aqui)
│   ├── styles/
│   │   ├── global.css
│   │   └── tailwind.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── .markdownlint
├── eslint.config.js
├── Estrutura de Pastas e Arquivos.md
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock



SYS/
├── # Dependências #
│	└── Pacotes
│		├── AutoMapper
│		├── Microsoft.EntityFrameworkCore.Sqlite
│		├── Microsoft.EntityFrameworkCore.Tools
│		└── Swashbuckle.AspNetCore
│
├── API/
│   ├── Controllers/
│   │   ├── ComprasController.cs
│   │   ├── MateriasPrimasController.cs
│   │   ├── ProdutosController.cs
│   │   └── VendasController.cs
│   └── Middlewares/
│
├── APPLICATION/
│   ├── DTOs/
│   ├── Interfaces/
│   │   ├── ICompraService.cs
│   │   ├── IMateriaPrimaService.cs
│   │   ├── IProdutoService.cs
│   │   └── IVendaService.cs
│   ├── Mappers/
│   └── Services/
│       ├── CompraService.cs
│       ├── MateriaPrimaService.cs
│       ├── ProdutoService.cs
│       └── VendaService.cs
│
├── DOMAIN/
│   ├── Entities/
│   │   ├── Almoxarifado/
│   │   │   ├── Almoxarifado.cs
│   │   │   ├── MateriaPrima.cs
│   │   │   └── MovimentacaoEstoque.cs
│   │   ├── Compras/
│   │   │   ├── Compra.cs
│   │   │   └── ItemCompra.cs
│   │   ├── Pessoas/
│   │   │   ├── Pessoa.cs
│   │   │   └── Setor.cs
│   │   ├── Producao/
│   │   │   ├── OrdemProducao.cs
│   │   │   └── Producao.cs
│   │   ├── Produtos/
│   │   │   ├── EstruturaProduto.cs
│   │   │   ├── Produto.cs
│   │   │   └── TipoProduto.cs
│   │   ├── Shared/
│   │   │   ├── AuditInfo.cs
│   │   │   └── BaseEntity.cs
│   │   └── Vendas/
│   │       ├── ItemVenda.cs
│   │       └── Venda.cs
│   ├── Enums/
│   ├── Exceptions/
│   ├── Interfaces/
│   │   ├── ICompraRepository.cs
│   │   ├── IMateriaPrimaRepository.cs
│   │   ├── IProdutoRepository.cs
│   │   └── IVendaRepository.cs
│   └── Specifications/
│
├── INFRASTRUCTURE/
│   ├── Data/
│   │   ├── Configurations/
│   │   ├── Migrations/
│   │   │   └── # Atualiza Conforme Alterações #
│   │   ├── SeedData/
│   │   │   ├── Almoxarifado/
│   │   │   │	├── MateriaPrimaSeed/
│   │   │   │   │   ├── MateriaPrimaSeed.cs
│   │   │   │   │ 	└── MateriaPrimaSeed.json
│   │   │   │   └AlmoxarifadoSeed.cs
│   │   │   ├── Compras/
│   │   │   │   ├── ComprasSeed.cs
│   │   │   │   └── ComprasSeed.json
│   │   │   ├── Produtos/
│   │   │   │   ├── ProdutosSeed.cs
│   │   │   │   └── ProdutosSeed.json
│   │   │   ├── Vendas/
│   │   │   │   ├── VendasSeed.cs
│   │   │   │   └── VendasSeed.json
│   │   │   └── SeedDatabase.cs
│   │   └── AppDbContext.cs
│   ├── Logging/
│   └── Repositories/
│       ├── CompraRepository.cs
│       ├── ProdutoRepository.cs
│       └── VendaRepository.cs
│
├── appsettings.json
└── Program.cs

