// Third-party dependencies

// Current project dependencies

// components/ProductHuntBadge.js
const ProductHuntBadge = () => {
  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 flex justify-center md:justify-end md:right-6 lg:right-11">
      <a
        href="https://www.producthunt.com/posts/whatsapp-flagscan?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-whatsapp&#0045;flagscan"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="Whatsapp FlagScan - Analyze your WhatsApp chats for red and green flags. | Product Hunt"
          className="w-64 h-14"
          height="54"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=494216&theme=light"
        />
      </a>
    </div>
  );
};

export default ProductHuntBadge;
