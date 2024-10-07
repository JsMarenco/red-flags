// Third-party dependencies

// Current project dependencies

const ProductHuntBadge = () => {
  const productHuntUrl = process.env.NEXT_PUBLIC_PRODUCT_HUNT_URL;
  const productHuntBadgeSrc = process.env.NEXT_PUBLIC_PRODUCT_HUNT_BADGE_SRC;

  return (
    <div className="w-full">
      <a href={productHuntUrl} rel="noopener noreferrer" target="_blank">
        <img
          alt="Whatsapp FlagScan - Analyze your WhatsApp chats for red and green flags. | Product Hunt"
          className="w-full h-14"
          height="54"
          src={productHuntBadgeSrc}
        />
      </a>
    </div>
  );
};

export default ProductHuntBadge;
