/**
 * Centralized book data for Chalk & Wonder Press
 * This file contains all book information used throughout the site
 */

const booksData = [
    {
        id: "emic-rizzle-tinkerer",
        title: "Emic Rizzle, Tinkerer",
        slug: "emic-rizzle-tinkerer",
        author: "Mary Ann Domanska",
        authorSlug: "mary-ann-domanska",
        illustrator: null, // Same as author
        illustratorSlug: null,
        ageRange: "Ages 8-12",
        releaseYear: 2024,
        category: ["picture", "new"],
        status: "available", // "available" or "coming-soon"
        coverImage: "../../assets/images/emic_tinkerer_cover.png",
        description: "Twelve-year-old Emic Rizzle doesn't just dream—she builds. When her family moves from Chicago to Flat Rock, North Carolina, she faces the challenge of starting over. Then she discovers a long-lost journal filled with sketches and secrets once belonging to Nikola Tesla, entrusted to her by her late grandfather. Now, strange men in dark suits are watching, and Emic must uncover the truth before it's too late. Armed with curiosity, creativity, and a pocketknife, Emic embarks on a thrilling adventure that could change everything—including where she truly belongs.",
        reviews: [
            {
                source: "Kirkus Reviews",
                url: "https://www.kirkusreviews.com/book-reviews/mary-ann-domanska/emic-rizzle-tinkerer/"
            }
        ],
        retailers: {
            amazon: "https://www.amazon.com/Emic-Rizzle-Tinkerer-Mary-Domanska/dp/1590217772/ref=sr_1_1?crid=2FQCL7WSTJJ07&dib=eyJ2IjoiMSJ9.HOdt0YZxRBo8PvTy38cJnw.vQMI1BtNKu4JMEtqHZJdFKyvJoZVqPl42gzlFsQBims&dib_tag=se&keywords=emic+rizzle+tinkerer&qid=1759671194&sprefix=emic+rizzle+tinkerer%2Caps%2C124&sr=8-1",
            barnesNoble: null,
            bookshop: null,
            strand: null
        }
    },
    {
        id: "nge-magical-drums",
        title: "Nge and the Magical Drums",
        slug: "nge-and-the-magical-drums",
        author: "Mary Ann Domanska",
        authorSlug: "mary-ann-domanska",
        illustrator: "George Amadeus",
        illustratorSlug: "george-amadeus",
        ageRange: "Ages 6-10",
        releaseYear: 2023,
        category: ["picture"],
        status: "available",
        coverImage: "../../assets/images/nge_magic_drum_cover.jpg",
        description: "Join Nge, a young orphan with a gift for drumming, as his village faces a devastating drought and he discovers his rhythm can summon life-saving rain. With help from Tembo the wise elephant, Asani the courageous lion, and playful monkeys Kali and Kofi, Nge learns that harmony and resilience can create extraordinary miracles. This enchanting story celebrates the magic of friendship and the boundless potential within us all.",
        reviews: [],
        retailers: {
            amazon: "https://www.amazon.com/Nge-Magical-Drums-Bringing-Village/dp/B0F1CR11FY/ref=sr_1_1?crid=33HXI1ZQS7G2T&dib=eyJ2IjoiMSJ9.JNz6T-O5L-06urR0UfZS_A.nQKz4LZryfvTz5eYb-hHQpwhieZ16fjg2UmEqOQADBk&dib_tag=se&keywords=nge+and+the+magical+drum&qid=1759670814&sprefix=nge+and+the+magical+drum%2Caps%2C96&sr=8-1",
            barnesNoble: "https://www.barnesandnoble.com/w/nge-and-the-magical-drums-mary-ann-domanska/1147133138?ean=9798992504002",
            bookshop: "https://bookshop.org/p/books/nge-and-the-magical-drums-bringing-rain-to-the-village-mary-ann-domanska/23759eb53a05b747?ean=9798992504002&next=t",
            strand: "https://www.strandbooks.com/nge-and-the-magical-drums-bringing-rain-to-the-village-9798992504002.html"
        }
    },
        {
        id: "fabemol-hears-heart",
        title: "Fabemol Hears The Heart",
        slug: "fabemol-hears-the-heart",
        author: "Mary Ann Domanska",
        authorSlug: "mary-ann-domanska",
        illustrator: "Gabriela Guadalajara",
        illustratorSlug: "gabriela-guadalajara",
        ageRange: "Ages 4-8",
        releaseYear: 2025,
        category: ["picture", "new"],
        status: "available",
        coverImage: "../../assets/images/Fabemol-Portada_216x279-PRINT.png",
        description: "In a world of swirling colors and musical trees, Fabemol is a quiet soul who doesn't speak much—but he hears more than most. When Tutu tumbles, Lali's wings droop, and Gliglucito hides behind silence, Fabemol doesn't try to fix their feelings. Instead, he listens. Through textured collage illustrations and whimsical characters, this gentle story explores the quiet magic of presence, emotional connection, and the healing power of truly being heard.",
        reviews: [],
        retailers: {
            amazon: "https://www.amazon.com/Fabemol-Hears-Heart-Listening-Empathy/dp/B0FM9L29NZ/ref=sr_1_1? crid=2YF9D1A9RAR8T&dib=eyJ2IjoiMSJ9.phf1waRThDF__dzNFUI9ltPsm4wz0O3UIG6mn2dVXC8. 6_Pc5Jl5LSfIMBj14PJKNUQy4sppnaEv7iYqhir__WM&dib_tag=se&keywords=fabemol&qid=1759671612&sprefix=fabemol%2Caps%2C114&sr=8-1",
            barnesNoble: "https://www.barnesandnoble.com/w/fabemol-hears-the-heart-mary-ann-domanska/1148042595?ean=9798992504071",
            bookshop: "https://bookshop.org/p/books/fabemol-hears-the-heart-a-story-about-listening-and-empathy/66167c8c7fc475c5? ean=9798992504057&next=t",
            strand:  "https://www.strandbooks.com/fabemol-hears-the-heart-a-story-about-listening-and-empathy-9798992504057.html"
        }
    },
    {
        id: "emic-random-acts",
        title: "Emic Rizzle Commits Random Acts of Art",
        slug: "emic-rizzle-commits-random-acts-of-art",
        author: "Mary Ann Domanska",
        authorSlug: "mary-ann-domanska",
        illustrator: null,
        illustratorSlug: null,
        ageRange: "Ages 8-12",
        releaseYear: 2025,
        expectedRelease: null,
        category: ["middle-grade", "new"],
        status: "available",
        coverImage: "../../assets/images/emic_random_acts_cover.png",
        description: "When Emic Rizzle discovers an old painting at an estate sale, she never expects it to change her life—or her entire town. With help from her friends Dublin and Dede, and her \"super camera\" invention, Emic uncovers a hidden signature revealing the painting as a lost Jackson Pollock masterpiece. As fame and chaos ensue, Emic and her friends must find a way to save their wildfire-ravaged community. A mystery-filled adventure about finding value in unexpected places.",
        reviews: [],
        retailers: {
            amazon: "https://www.amazon.com/Emic-Rizzle-Commits-Random-Acts/dp/B0FS8PPH8B/ref=sr_1_1?crid=27AX39WLXKOSD&dib=eyJ2IjoiMSJ9.bn8QRMJSM_zZBaGZIa4BkA.xUGooY4hDNzMSnlx4jkNqHsMS35gyFc1NywO9YNI3rI&dib_tag=se&keywords=emic+rizzle+commits+random+acts+of+art&qid=1759671510&sprefix=emic+rizzle+commits+random+acts+of+art%2Caps%2C62&sr=8-1",
            barnesNoble: "https://www.barnesandnoble.com/w/emic-rizzle-commits-random-acts-of-art-mary-ann-domanska/1148367206?ean=9798992504026",
            bookshop: "https://bookshop.org/p/books/emic-rizzle-commits-random-acts-of-art/f2d6cb40dcb7e764?ean=9798992504026&next=t",
            strand: null
        }
    },
    {
        id: "i-was-a-willow",
        title: "I Was a Willow",
        slug: "i-was-a-willow",
        author: "Yaga M. Staretz",
        authorSlug: null, // Author card on the authors page has no anchor id
        illustrator: null,
        illustratorSlug: null,
        ageRange: null,
        genre: "Adult Historical Fiction",
        releaseYear: 2025,
        category: ["adult", "new"],
        status: "available",
        coverImage: "../../assets/images/i_was_a_willow_cover.jpg",
        description: "<em>I Was a Willow</em> is a poignant and darkly humorous novel about memory, identity, and survival in a world reshaped by war. From the secluded Home of Divine Providence, sharp-tongued mask-maker Adam Czulartian looks back upon the tangled history of his family&mdash;especially his niece Nusia, whose childhood is upended by bombing, displacement, and the difficult choices demanded by survival.",
        descriptionParagraphs: [
            "<em>I Was a Willow</em> is a poignant and darkly humorous novel about memory, identity, and survival in a world reshaped by war.",
            "From the secluded Home of Divine Providence, sharp-tongued mask-maker Adam Czulartian looks back upon the tangled history of his family&mdash;especially his niece Nusia, whose childhood is upended by bombing, displacement, and the difficult choices demanded by survival.",
            "Unfolding across generations in an Eastern Europe redrawn again and again by war, the novel follows a family through bombardment, displacement, and the long aftermath&mdash;through a homeland that has carried many names, and borders that shift beneath the people living inside them.",
            "Adam's trade proves a fitting one. As past and present intertwine, his reflections reveal the many ways people conceal, perform, and reinvent themselves in order to endure: the faces they carve for the world, and the ones they keep hidden.",
            "Richly layered and alive with biting wit, Yaga M. Staretz's debut novel explores the stories families tell, the truths they bury, and the quiet resilience that remains after history has done its worst."
        ],
        reviews: [],
        retailers: {
            amazon: "https://www.amazon.com/I-Was-Willow-Yaga-Staretz/dp/B0FNQ3RXCH",
            barnesNoble: "https://www.barnesandnoble.com/w/i-was-a-willow-yaga-m-staretz/1148112704?ean=9798992504040",
            bookshop: "https://bookshop.org/p/books/i-was-a-willow-yaga-m-staretz/6526d7610a850415?ean=9798992504040",
            strand: "https://www.strandbooks.com/i-was-a-willow-9798992504040.html"
        }
    },
    {
        id: "shire-of-the-wissahickon",
        title: "The Shire of the Wissahickon",
        slug: "shire-of-the-wissahickon",
        author: "Michael Gallagher",
        authorSlug: "michael-gallagher",
        illustrator: "Alison Lee Chapman",
        illustratorSlug: null,
        illustratorUrl: "https://www.alisonleechapman.com",
        ageRange: null,
        releaseYear: 2026,
        expectedRelease: "Fall 2026",
        category: ["coming-soon"],
        status: "coming-soon",
        coverImage: null,
        description: "A forthcoming children's story set in Philadelphia's Wissahickon Valley. Drawing on the area's nature and local history, it invites young readers to step away from their screens and discover the adventures waiting in the natural world around them.",
        reviews: [],
        retailers: {
            amazon: null,
            barnesNoble: null,
            bookshop: null,
            strand: null
        }
    },
    {
        id: "somewhere-between-sprinklers-and-sweaters",
        title: "Somewhere Between Sprinklers and Sweaters",
        slug: "somewhere-between-sprinklers-and-sweaters",
        author: "Mary Ann Domanska",
        authorSlug: "mary-ann-domanska",
        illustrator: "Zivia Brown",
        illustratorSlug: null,
        illustratorUrl: "https://www.ziviabrown.com/",
        ageRange: null,
        releaseYear: 2026,
        expectedRelease: "Fall 2026",
        category: ["coming-soon"],
        status: "coming-soon",
        coverImage: null,
        description: "A collection of children's poetry by Mary Ann Domanska.",
        reviews: [],
        retailers: {
            amazon: null,
            barnesNoble: null,
            bookshop: null,
            strand: null
        }
    }
];

// Helper function to get book by slug
function getBookBySlug(slug) {
    return booksData.find(book => book.slug === slug);
}

// Helper function to get all available books
function getAvailableBooks() {
    return booksData.filter(book => book.status === 'available');
}

// Helper function to get all coming soon books
function getComingSoonBooks() {
    return booksData.filter(book => book.status === 'coming-soon');
}

// Helper function to get books by category
function getBooksByCategory(category) {
    if (category === 'all') return booksData;
    return booksData.filter(book => book.category.includes(category));
}

// Helper function to format author/illustrator text
// The illustrator name links to an external site when illustratorUrl is set.
function getCreatorText(book) {
    const illustratorText = book.illustrator && book.illustratorUrl
        ? `<a href="${book.illustratorUrl}" target="_blank" rel="noopener">${book.illustrator}</a>`
        : book.illustrator;

    if (book.author && book.illustrator) {
        return `By ${book.author} • Illustrated by ${illustratorText}`;
    } else if (book.author) {
        return `By ${book.author}`;
    } else if (book.illustrator) {
        return `Illustrated by ${illustratorText}`;
    }
    return '';
}

// Helper function to format author/illustrator text with links (for book detail pages)
function getCreatorTextWithLinks(book, authorsPagePath = '../../authors/') {
    let parts = [];

    if (book.author && book.authorSlug) {
        parts.push(`By <a href="${authorsPagePath}#${book.authorSlug}">${book.author}</a>`);
    } else if (book.author) {
        parts.push(`By ${book.author}`);
    }

    if (book.illustrator && book.illustratorSlug) {
        parts.push(`Illustrated by <a href="${authorsPagePath}#${book.illustratorSlug}">${book.illustrator}</a>`);
    } else if (book.illustrator && book.illustratorUrl) {
        parts.push(`Illustrated by <a href="${book.illustratorUrl}" target="_blank" rel="noopener">${book.illustrator}</a>`);
    } else if (book.illustrator) {
        parts.push(`Illustrated by ${book.illustrator}`);
    }

    return parts.join(' • ');
}
