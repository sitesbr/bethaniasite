/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- OBRIGATÓRIO: Transforma o site em HTML estático
  images: {
    unoptimized: true, // <--- OBRIGATÓRIO: Permite imagens sem servidor pago
  },
  basePath: "/bethaniasite", // <--- O NOME DO SEU REPOSITÓRIO (ajusta os links)
  assetPrefix: "/bethaniasite",
};

export default nextConfig;
