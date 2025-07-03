import '../styles/Home.css';
import SelfCare from "../assets/SelfCare.png";
import naturalShampoo from '../assets/naturalShampoo.jpg';
import skinCleanser from '../assets/skinCleanser.jpg';
import moistur from '../assets/moistur.jpg';

const products = [
  {
    id: 1,
    name: 'ბუნებრივი შამპუნი',
    category: 'შამპუნი',
    price: 20,
    image: naturalShampoo,
    description: 'ეს შამპუნი დამზადებულია 100%-ით ნატურალური ინგრედიენტებით და არ შეიცავს სულფატებს. შესაფერისია ყველა ტიპის თმისთვის. მოცულობა: 300ml.'
  },
  {
    id: 2,
    name: 'დამატენიანებელი დუშგელი',
    category: 'დუშგელი',
    price: 15,
    image: moistur,
    description: 'დამატენიანებელი და დამამშვიდებელი ეფექტით, შესაფერისია ყოველდღიური გამოყენებისთვის. მოცულობა: 400ml.'
  },
  {
    id: 3,
    name: 'კანის გამწმენდი',
    category: 'კანის მოვლა',
    price: 25,
    image: skinCleanser,
    description: 'ღრმად წმენდს ფორებს და ამცირებს კანის ცხიმიანობას ნატურალური ექსტრაქტების წყალობით. მოცულობა: 150ml.'
  },
];

const Home = () => {
  const mostPopularProducts = products.slice(0, 6);

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero-section" aria-label="მთავარი სექცია">
        <div className="hero-content">
          <h1 className="hero-title">
            გამოიჩინეთ თვითზრუნვის ხელოვნება
          </h1>
          <p className="hero-description">
            ჩვენ გთავაზობთ იტალიის პრემიუმ ბრენდების თვითზრუნვის პროდუქციას — დამზადებული ნატურალური ინგრედიენტებით, უმაღლესი ხარისხით და სიყვარულით. ახლა უკვე საქართველოში, ხელმისაწვდომ ფასებში!
          </p>
          <a href="/Products" className="cta-button" aria-label="გაეცანით პროდუქციას">
            გაეცანით პროდუქციას
          </a>
        </div>
        <div className="hero-image">
          <img src={SelfCare} alt="თვითზრუნვის პროდუქცია" />
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose" aria-label="რატომ აირჩიოთ SelfCare">
        <h2 className="section-title">რატომ აირჩიოთ SelfCare?</h2>
        <div className="features-grid">
          <article className="feature-item" tabIndex={0}>
            <h3>იტალიური ბრენდები</h3>
            <p>
              ჩვენ ვამაყობთ, რომ გთავაზობთ იტალიის საუკეთესო ბრენდების პროდუქციას, რომელიც საქართველოში ჩამოგვაქვს და თქვენთვის ხელმისაწვდომ ფასებში ვამზადებთ.
            </p>
          </article>
          <article className="feature-item" tabIndex={0}>
            <h3>🚚 კარგი გადასაზიდი სერვისი და უნიკალური ფასები</h3>
            <p>
              გირჩევთ გამოიძიოთ ჩვენი სერვისი: მაღალი ხარისხის იტალიური პროდუქცია და სასწაულად ხელსაყრელი ფასები, რაც უზრუნველყოფს შესანიშნავ მიწოდებას.
            </p>
          </article>
        </div>
      </section>

      {/* Most Popular Products */}
      <section className="most-sold" aria-label="ყველაზე პოპულარული პროდუქტები">
        <h2 className="section-title">ყველაზე პოპულარული პროდუქტები</h2>
        <div className="product-grid">
          {mostPopularProducts.map(product => (
            <article
              key={product.id}
              className="product-card"
              tabIndex={0}
              aria-label={`${product.name} ფასით ${product.price} ლარი`}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price} ₾</p>
              <a href="/Products" className="view-button" aria-label={`იხილეთ პროდუქტი: ${product.name}`}>
                იხილეთ
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
