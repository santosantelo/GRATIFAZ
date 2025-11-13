import React from 'react';

const newsArticles = [
  {
    id: 1,
    title: "Estado inicia pagamentos do auxílio de R$ 1 mil para moradores de Rio Bonito do Iguaçu",
    source: "Governo do Paraná",
    date: "Há 4 horas",
    snippet: "O governo estadual começou a liberar o auxílio emergencial para as famílias afetadas pelo tornado, visando apoiar as necessidades imediatas da população.",
    imageUrl: "https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/imagem/2019-09/prainha_alagado1.jpeg"
  },
  {
    id: 2,
    title: "Após tornado, Rio Bonito do Iguaçu começa trabalhos de reconstrução",
    source: "Agência Brasil",
    date: "Há 1 dia",
    snippet: "Equipes da prefeitura e voluntários trabalham na remoção de escombros e na reconstrução das áreas mais atingidas, unindo forças para reerguer a cidade.",
    imageUrl: "https://imagens.ebc.com.br/MSFi7DkuK0CZMv3DpY4OhDhaC5c=/754x0/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/video/ebc-video-b1d2d4b8d5ba9efda19bb1d5b0a59ff2.jpg?itok=TY9AZ2PZ"
  },
  {
    id: 3,
    title: "Copel troca 345 postes e retoma 100% da rede elétrica na área urbana",
    source: "Governo do Paraná",
    date: "Há 23 horas",
    snippet: "A Copel concluiu a troca de postes e restabeleceu completamente a energia elétrica na zona urbana, um passo crucial para a normalização da vida na cidade.",
    imageUrl: "https://veja.abril.com.br/wp-content/uploads/2025/11/parana-rio-bonito-do-iguacu.jpeg?quality=70&strip=info&w=414&h=280&crop=1"
  },
  {
    id: 4,
    title: "Acadêmicos de Cascavel se unem à reconstrução e ajudam a limpar creche",
    source: "CGN",
    date: "Há 4 horas",
    snippet: "Estudantes universitários da cidade vizinha de Cascavel chegaram para ajudar nos mutirões de limpeza, demonstrando a força da solidariedade regional.",
    imageUrl: "https://static.ndmais.com.br/2025/11/antes-e-depois-tornado-rua.jpg"
  }
];

interface NewsArticle {
  id: number;
  title: string;
  source: string;
  date: string;
  snippet: string;
  imageUrl: string;
}

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <button className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 flex flex-col w-full text-left hover:shadow-md active:scale-[0.98] active:shadow-inner transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
    <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover" />
    <div className="p-4 flex flex-col flex-1">
      <p className="text-xs font-semibold text-primary uppercase tracking-wide">{article.source}</p>
      <h3 className="font-bold text-dark-gray mt-1 text-md">{article.title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-1">{article.snippet}</p>
      <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-500">{article.date}</span>
          <div className="text-sm font-semibold text-ios-blue hover:underline" onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              alert('Funcionalidade de link externo não implementada nesta demonstração.');
            }}>Leia mais</div>
      </div>
    </div>
  </button>
);

const NewsScreen: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="p-6 pt-12">
        <h1 className="text-4xl font-bold text-dark-gray">Notícias</h1>
      </header>

      <div className="p-6 pt-0 space-y-6">
        {newsArticles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsScreen;