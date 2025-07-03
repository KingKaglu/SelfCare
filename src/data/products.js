import naturalShampoo from '../assets/naturalShampoo.jpg'
import forDry from '../assets/forDry.jpg'
import oilyHair from '../assets/oilyHair.jpg'
import strongHair from '../assets/strongHair.webp'
import moistur from '../assets/moistur.jpg'
import aromaticGel from '../assets/aromaticGel.jpeg'
import gentle from '../assets/gentle.jpg'
import toningGel from '../assets/toningGel.webp'
import skinCleanser from '../assets/skinCleanser.jpg'
import MoistrCream from '../assets/MoistrCream.webp'
import nightCream from '../assets/nightCream.webp'
import skinYounger from '../assets/skinYounger.svg'


const products = [
  // შამპუნი
  {
    id: 1,
    name: 'ბუნებრივი შამპუნი',
    category: 'შამპუნი',
    price: 20,
    image: naturalShampoo,
    description: 'ეს შამპუნი დამზადებულია 100%-ით ნატურალური ინგრედიენტებით და არ შეიცავს სულფატებს. შესაფერისია ყველა ტიპის თმისთვის. მოცულობა: 300ml.'
  },
  {
    id: 4,
    name: 'შამპუნი მშრალი თმისთვის',
    category: 'შამპუნი',
    price: 22,
    image: forDry,
    description: 'სპეციალურად დამზადებულია მშრალი თმის მოსავლელად. აძლევს ტენიანობას და ელასტიურობას თმას. მოცულობა: 250ml.'
  },
  {
    id: 5,
    name: 'შამპუნი ცხიმიანი თმისთვის',
    category: 'შამპუნი',
    price: 19,
    image: oilyHair,
    description: 'ნაზად წმენდს ცხიმიან სკალპს და არ აშრობს თმას. მდგრადი ეფექტისთვის. მოცულობა: 250ml.'
  },
  {
    id: 6,
    name: 'გამაძლიერებელი შამპუნი',
    category: 'შამპუნი',
    price: 24,
    image: strongHair,
    description: 'ძალისმცემი კომპლექსით გაჯერებული შამპუნი — იდეალურია თხელი თმისთვის. მოცულობა: 200ml.'
  },

  // დუშგელი
  {
    id: 2,
    name: 'დამატენიანებელი დუშგელი',
    category: 'დუშგელი',
    price: 15,
    image: moistur,
    description: 'დამატენიანებელი და დამამშვიდებელი ეფექტით, შესაფერისია ყოველდღიური გამოყენებისთვის. მოცულობა: 400ml.'
  },
  {
    id: 7,
    name: 'არომატული დუშგელი',
    category: 'დუშგელი',
    price: 17,
    image: aromaticGel,
    description: 'არომატული კომპოზიცია შექმნილია დასვენებისა და განტვირთვისთვის. მოცულობა: 300ml.'
  },
  {
    id: 8,
    name: 'დუშგელი მგრძნობიარე კანისთვის',
    category: 'დუშგელი',
    price: 16,
    image: gentle,
    description: 'ჰიპოალერგიული ფორმულა განსაკუთრებით მგრძნობიარე კანისთვის. მოცულობა: 250ml.'
  },
  {
    id: 9,
    name: 'დუშგელი ტონიზირებელი ეფექტით',
    category: 'დუშგელი',
    price: 18,
    image: toningGel,
    description: 'ენერგიის მომცემი ეფექტი ციტრუსოვანი არომატით — იდეალურია დილისთვის. მოცულობა: 250ml.'
  },

  // კანის მოვლა
  {
    id: 3,
    name: 'კანის გამწმენდი',
    category: 'კანის მოვლა',
    price: 25,
    image: skinCleanser,
    description: 'ღრმად წმენდს ფორებს და ამცირებს კანის ცხიმიანობას ნატურალური ექსტრაქტების წყალობით. მოცულობა: 150ml.'
  },
  {
    id: 10,
    name: 'დამატენიანებელი კრემი',
    category: 'კანის მოვლა',
    price: 28,
    image: MoistrCream,
    description: 'ინტენსიური დამატენიანებელი ეფექტით, შესაფერისია მშრალი კანისთვის. მოცულობა: 50ml.'
  },
  {
    id: 11,
    name: 'ღამის კრემი',
    category: 'კანის მოვლა',
    price: 30,
    image: nightCream,
    description: 'აღდგენის პროცესის მხარდამჭერი ღამის კრემი რეგენერაციული ინგრედიენტებით. მოცულობა: 50ml.'
  },
  {
    id: 12,
    name: 'კანის გამაახალგაზრდავებელი სერუმი',
    category: 'კანის მოვლა',
    price: 35,
    image: skinYounger,
    description: 'სუპერ აქტიური ფორმულა კანის ელასტიურობისა და ბზინვარების გასაუმჯობესებლად. მოცულობა: 30ml.'
  },
];

export default products;
