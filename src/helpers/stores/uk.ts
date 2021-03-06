import { Store, Category } from '../stores'

export const stores: Store[] = [
  {
    title: 'hive.co.uk',
    url: 'http://www.hive.co.uk/Search/Keyword?keyword=%1$s',
    categories: [
      Category.ENGLISH_BOOKS,
      Category.STRIPBOOKS,
      Category.BOOKS,
      Category.DVD,
      Category.VIDEOGAMES,
      Category.CLASSICAL,
    ],
  },
  {
    title: 'worldofbooks.com',
    url: 'https://www.worldofbooks.com/en-gb/books/xxx/xxx/%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'wordery.com',
    url: 'https://wordery.com/search?term=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'booksetc.co.uk',
    url: 'https://www.booksetc.co.uk/books/search?q=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'foyles.co.uk',
    url: 'https://www.foyles.co.uk/all?term=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'uk.bookshop.org',
    url: 'https://uk.bookshop.org/books?keywords=%1$s',
    categories: [Category.ENGLISH_BOOKS, Category.STRIPBOOKS, Category.BOOKS],
  },
  {
    title: 'kobo.com',
    url: 'https://www.kobo.com/gb/en/search?query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
  {
    title: 'feedbooks.com',
    url: 'http://www.feedbooks.com/search?lang=en&query=%1$s',
    categories: [Category.DIGITAL_TEXT],
  },
]
