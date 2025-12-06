 // ==========================================
// NUSANTARA CRAFTS - MAIN JAVASCRIPT
// ==========================================

// --- DATA STATE ---
let cart = [];
let currentModalProduct = {};

// --- DATABASE DESKRIPSI PRODUK ---
const productDescriptions = {
    "Asbak Karet": "Asbak unik berbahan dasar karet berkualitas tinggi. Dibuat oleh pengrajin lokal dengan desain modern yang cocok untuk dekorasi rumah maupun kantor. Tahan lama, mudah dibersihkan, dan ramah lingkungan.",
    "Sandal Karet": "Sandal karet handmade dengan desain ergonomis dan nyaman dipakai. Cocok untuk aktivitas sehari-hari, dibuat dari bahan karet pilihan yang anti-slip dan tahan lama. Tersedia dalam berbagai ukuran.",
    "Karpet Karet": "Karpet karet multifungsi yang dapat digunakan di berbagai area seperti kamar mandi, dapur, atau teras. Material berkualitas tinggi dengan daya cengkram kuat, mudah dibersihkan, dan tidak mudah bergeser.",
    "Tempat Sampah Karet": "Tempat sampah dari bahan karet dengan desain praktis dan modern. Ringan namun kokoh, mudah dibersihkan, dan tahan terhadap berbagai kondisi cuaca. Cocok untuk indoor maupun outdoor.",
    "Pintu Ukiran": "Produk pilihan terbaik untuk Anda yang ingin menghadirkan kesan mewah dan berkelas pada hunian. Terbuat dari kayu berkualitas tinggi dengan detail ukiran yang dipahat secara presisi, pintu ini bukan hanya penutup ruang, tetapi juga karya seni yang meningkatkan nilai estetika rumah Anda. Dengan desain yang elegan dan daya tahan yang luar biasa, Pintu Ukiran siap memberikan kesan pertama yang memukau bagi setiap tamu yang datang.",
    "Hiasan Gantung Kerang": "Karya seni handmade dengan rangkaian kulit kerang asli yang menghasilkan tampilan estetik dan suara lembut yang menenangkan. Cocok untuk dekorasi teras, kamar, atau café, memberikan sentuhan alami dan nuansa tropis pada ruangan Anda.",
    "Baju Adat Single": "Busana adat pria dengan desain modern-tradisional, menonjolkan atasan krem berbordir mewah dipadukan kain songket merah bermotif khas. Dilengkapi ikat kepala senada untuk tampilan yang serasi dan berwibawa.",
    "Kursi Kayu Jati 1 set": "Set kursi tamu kayu jati berkualitas premium dengan desain minimalis klasik yang elegan. Terdiri dari dua kursi dan satu meja bundar, produk ini menonjolkan warna natural kayu serta finishing halus yang mempercantik tampilan ruang tamu, teras, maupun ruang santai.",
    "Gangsing Kayu Tradisional": "Gasing kayu tradisional yang dibuat secara handmade dengan detail halus dan finishing natural. Dirancang untuk berputar stabil dan tahan lama, cocok sebagai mainan klasik untuk anak-anak maupun koleksi pecinta permainan tradisional.",
    "Rak Ayaman Bambu 2 Tingkat": "Rak anyaman bambu dua tingkat dengan desain minimalis dan sentuhan natural. Dibuat secara handmade dengan rangka bambu yang kuat serta anyaman rapi, menjadikannya pilihan ideal untuk dekorasi rumah maupun penyimpanan barang ringan.",
    "Baju Adat Pasangan": "Ingin momen sakralmu terasa lebih magis? Hadirkan aura bangsawan dengan Set Couple Adat Jawa Premium ini.Terbuat dari bahan Bludru (Velvet) halus yang pekat, dipadukan dengan sulaman benang emas yang detail, setelan ini menjamin Anda tampil berkelas dan timeless. Sudah lengkap dengan kain jarik senada yang nyaman dipakai berjam-jam.",
    "Egrang Bambu":"Rindu serunya masa kecil dulu? Hadirkan kembali tawa lepas di rumah dengan Egrang Bambu Tradisional ini. Dibuat dari bambu pilihan yang kokoh namun ringan, didesain khusus agar aman untuk melatih keseimbangan motorik anak (dan orang tua!).Pijakan kaki kuat, permukaan halus tanpa serabut tajam. Cara asik untuk bonding bareng si kecil sambil melestarikan budaya.Pesan sekarang, ciptakan memori masa kecil yang tak terlupakan!",
    "Egrang Tempurung Kelapa":"Aksesori tempurung kelapa asli dengan bentuk rapi dan tali kuat. Cocok untuk kostum tari, properti panggung, atau dekorasi etnik. Memberi sentuhan alami yang unik dan berkarakter.",
    "Hiasan Gantung Kerang": "Karya seni handmade dengan rangkaian kulit kerang asli yang menghasilkan tampilan estetik dan suara lembut yang menenangkan. Cocok untuk dekorasi teras, kamar, atau café, memberikan sentuhan alami dan nuansa tropis pada ruangan Anda.",
    "Keranjang Anyam": "Keranjang bambu anyaman berkualitas dengan pegangan kuat dan desain klasik. Cocok untuk hampers, dekorasi, penyimpanan, atau kebutuhan acara. Natural, ringan, dan tampak elegan.",
    "Sofa Kayu Ukir": "Sofa kayu ukir klasik dengan detail artistik dan finishing halus. Dibuat dari kayu berkualitas, kokoh, serta dilengkapi laci praktis. Cocok untuk ruang tamu, teras, hingga sudut dekoratif bernuansa elegan.",
    "Piring Lidi": "Ganti piring plastik sekali pakai Anda dengan kerajinan tangan yang cantik dan berkelanjutan. Piring anyaman rotan ini memiliki pola anyaman eksklusif yang tidak hanya fungsional sebagai piring saji, tetapi juga indah sebagai dekorasi dinding bergaya Bohemian (Boho)."
    
};

// --- DATA PRODUK TAMBAHAN (untuk Load More) ---
const additionalProducts = [
    {
        name: "Pintu Ukiran",
        price: 3250000,
        location: "Ukiran",
        img: "./asset/ukiran-pintu.jpg"
    },
    {
        name: "Hiasan Gantung Kerang",
        price: 75000,
        location: "Aksesoris",
        img: "./asset/aksesori-rumah.jpg"
    },
    {
        name: "Baju Adat Single",
        price: 1200000,
        location: "Pakaian",
        img: "./asset/baju-adat.jpg"
    },
    {
        name: "Kursi Kayu Jati 1 set",
        price: 1950000,
        location: "Furniture Rumah",
        img: "./asset/kursi-kayu.jpg"
    },
    {
        name: "Gangsing Kayu Tradisional",
        price: 55000,
        location: "Mainan",
        img: "./asset/mainan-gasing.jpg"
    },
    {
        name: "Rak Ayaman Bambu 2 Tingkat",
        price: 35000,
        location: "Perabotan Rumah Tangga",
        img: "./asset/perabot-rt.jpg"
    },
    {
        name: "Baju Adat Pasangan",
        price: 1750000,
        location: "Pakaian",
        img: "./asset/baju-adat1.jpg"
    },
    {
        name: "Egrang Bambu",
        price: 50000,
        location: "Mainan",
        img: "./asset/egrang-bambu.jpg"
    },
    {
        name: "Egrang Tempurung Kelapa",
        price: 37000,
        location: "Mainan",
        img: "./asset/egrang-batok.jpg"
    },
    {
        name: "Hiasan Gantung Kerang",
        price: 25000,
        location: "Aksesoris",
        img: "./asset/gantugan-lawang.jpg"
    },
    {
        name: "Keranjang Anyam",
        price: 35000,
        location: "Perabotan Rumah Tangga",
        img: "./asset/keranjang-anyam1.jpg"
    },
    {
        name: "Keranjang Anyam",
        price: 48000,
        location: "Perabotan Rumah Tangga",
        img: "./asset/keranjang-anyam2.jpg"
    },
    {
        name: "Sofa Kayu Ukir",
        price: 1289000,
        location: "Furnitur Rumah",
        img: "./asset/kursi-ukir.jpg"
    },
    {
        name: "Piring Lidi",
        price: 13000,
        location: "Perabotan Rumah Tangga",
        img: "./asset/piring-lidi.jpg"
    },
];

// ==========================================
// CART MANAGEMENT FUNCTIONS
// ==========================================

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if (drawer.classList.contains('translate-x-full')) {
        // Open Cart
        drawer.classList.remove('translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden'; 
    } else {
        // Close Cart
        drawer.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
    }
}

function addToCart(name, price, img) {
    // Check if item already exists
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ name, price, img, qty: 1 });
    }
    updateCartUI();
    
    // Auto-open drawer if closed
    const drawer = document.getElementById('cart-drawer');
    if (drawer.classList.contains('translate-x-full')) {
        toggleCart();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty');
    const footer = document.getElementById('cart-footer');
    const badges = [
        document.getElementById('cart-badge'), 
        document.getElementById('mobile-cart-badge')
    ];
    const totalEl = document.getElementById('cart-total');

    // Update Badge Numbers
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    badges.forEach(badge => {
        if (badge) {
            badge.innerText = totalQty;
            badge.classList.toggle('opacity-0', totalQty === 0);
        }
    });

    // Render Cart Items or Empty State
    if (cart.length === 0) {
        container.classList.add('hidden');
        footer.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        container.classList.remove('hidden');
        footer.classList.remove('hidden');
        emptyState.classList.add('hidden');
        
        let html = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const subtotal = item.price * item.qty;
            totalPrice += subtotal;
            html += `
                <div class="flex gap-4 items-start animate-fadeIn" data-index="${index}">
                    <img src="${item.img}" class="w-16 h-16 rounded-lg object-cover bg-gray-100">
                    <div class="flex-1">
                        <h4 class="font-bold text-sm text-brand-900">${item.name}</h4>
                        <p class="text-xs text-gray-500 mb-1">Rp ${item.price.toLocaleString('id-ID')}</p>
                        <div class="flex items-center gap-2">
                            <button onclick="changeQty(${index}, -1)" class="w-6 h-6 rounded bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200">-</button>
                            <span class="text-sm font-medium w-4 text-center">${item.qty}</span>
                            <button onclick="changeQty(${index}, 1)" class="w-6 h-6 rounded bg-brand-100 text-brand-700 flex items-center justify-center hover:bg-brand-200">+</button>
                        </div>
                    </div>
                    <button onclick="removeItem(${index})" class="text-gray-400 hover:text-red-500 transition">
                        <i class="ph-fill ph-trash"></i>
                    </button>
                </div>
            `;
        });
        container.innerHTML = html;
        totalEl.innerText = 'Rp ' + totalPrice.toLocaleString('id-ID');
    }
}

function changeQty(index, change) {
    const newQty = cart[index].qty + change;
    
    if (newQty > 0) {
        cart[index].qty = newQty;
        updateCartUI();
    } else if (newQty === 0) {
        removeItem(index);
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// ==========================================
// CHECKOUT / PAYMENT (WhatsApp Integration)
// ==========================================

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang belanja Anda kosong!");
        return;
    }

    const phoneNumber = "6289636191507";
    let message = `Halo Tradify Nusantara, saya ingin memesan:%0A%0A`;
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        message += `${index + 1}. ${item.name} (${item.qty}x) : Rp ${subtotal.toLocaleString('id-ID')}%0A`;
    });

    message += `%0A*Total Pembayaran: Rp ${total.toLocaleString('id-ID')}*`;
    message += `%0A%0AMohon info ongkos kirim dan rekening pembayaran. Terima kasih!`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// ==========================================
// PRODUCT MODAL FUNCTIONS
// ==========================================

function openProductModal(name, price, category, img) {
    const modal = document.getElementById('product-modal');
    
    // Set Product Data
    document.getElementById('modal-img').src = img;
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-price').innerText = 'Rp ' + price.toLocaleString('id-ID');
    document.getElementById('modal-category').innerText = category;
    
    // Set Dynamic Description
    const descriptionElement = document.querySelector('#product-modal p.text-gray-600');
    if (descriptionElement) {
        const description = productDescriptions[name] ;
        descriptionElement.innerText = description;
    }
    
    currentModalProduct = { name, price, img };

    // Show Modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

function addToCartFromModal() {
    addToCart(currentModalProduct.name, currentModalProduct.price, currentModalProduct.img);
    closeModal();
}

// ==========================================
// LOAD MORE PRODUCTS
// ==========================================

function loadMoreProducts() {
    const gridContainer = document.querySelector('#products .grid');
    const btnContainer = document.getElementById('load-more-container');
    const btn = btnContainer.querySelector('button');

    // Show Loading State
    btn.innerHTML = '<i class="ph-bold ph-spinner animate-spin"></i> Memuat...';
    
    setTimeout(() => {
        additionalProducts.forEach(product => {
            const productHTML = `
                <div class="group animate-fadeIn">
                    <div class="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5] mb-4 cursor-pointer" 
                         onclick="openProductModal('${product.name}', ${product.price}, '${product.location}', '${product.img}')">
                        <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover transform group-hover:scale-105 transition duration-500">
                        <button onclick="event.stopPropagation(); addToCart('${product.name}', ${product.price}, '${product.img}')" 
                                class="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-300 hover:bg-brand-700 hover:text-white">
                            <i class="ph-bold ph-plus"></i>
                        </button>
                    </div>
                    <div>
                        <p class="text-xs text-brand-700 font-bold uppercase">${product.location}</p>
                        <h3 class="font-serif font-bold text-lg text-brand-900 group-hover:text-brand-700 transition">${product.name}</h3>
                        <p class="font-bold text-brand-900 mt-1">Rp ${product.price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
            `;
            gridContainer.insertAdjacentHTML('beforeend', productHTML);
        });

        btnContainer.style.display = 'none';
    }, 800);
}

// ==========================================
// CONTACT FORM
// ==========================================

function sendContactMessage() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !message) {
        alert("Harap isi Nama dan Pesan terlebih dahulu.");
        return;
    }

    const phoneNumber = "6289636191507";
    const textString = `Halo Admin, ada pesan baru dari website:\n\n` +
                       `👤 *Nama:* ${name}\n` +
                       `📧 *Email:* ${email}\n` +
                       `📝 *Pesan:* ${message}`;
    
    const encodedText = encodeURIComponent(textString);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// NEWSLETTER SUBSCRIPTION
// ==========================================

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
        alert('Silakan masukkan alamat email Anda.');
        return;
    }
    
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid. Silakan coba lagi.');
        return;
    }
    
    alert(`Terima kasih! Email ${email} berhasil didaftarkan. Anda akan menerima update terbaru dari kami.`);
    emailInput.value = '';
    
    // Optional: Send to WhatsApp
    const phoneNumber = "6289636191507";
    const message = `Halo Admin, ada pendaftaran newsletter baru:%0A%0AEmail: ${email}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ==========================================
// SMOOTH SCROLL & UI ENHANCEMENTS
// ==========================================

// Smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Contact section smooth scroll
    document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Footer links smooth scroll
    document.querySelectorAll('footer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Contact card hover animation
    document.querySelectorAll('#contact .group').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// --- DARK MODE LOGIC ---
function toggleTheme() {
    const html = document.documentElement;
    
    // Desktop Icons
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Mobile Icons (Optional chaining handling inside logic)
    const mobileSunIcon = document.getElementById('mobile-sun-icon');
    const mobileMoonIcon = document.getElementById('mobile-moon-icon');

    if (html.classList.contains('dark')) {
        // ☀️ SWITCH TO LIGHT MODE ☀️
        html.classList.remove('dark');
        localStorage.theme = 'light';

        // Logic: Di Light Mode, kita butuh MOON icon (untuk switch ke dark)
        // Jadi: Tampilkan Moon, Sembunyikan Sun
        
        // Desktop
        sunIcon.classList.add('theme-icon-hidden');    // Sembunyikan Sun
        moonIcon.classList.remove('theme-icon-hidden'); // Tampilkan Moon

        // Mobile
        if (mobileMoonIcon && mobileSunIcon) {
            mobileSunIcon.classList.add('theme-icon-hidden');
            mobileMoonIcon.classList.remove('theme-icon-hidden');
        }

    } else {
        // 🌙 SWITCH TO DARK MODE 🌙
        html.classList.add('dark');
        localStorage.theme = 'dark';

        // Logic: Di Dark Mode, kita butuh SUN icon (untuk switch ke light)
        // Jadi: Tampilkan Sun, Sembunyikan Moon

        // Desktop
        moonIcon.classList.add('theme-icon-hidden');   // Sembunyikan Moon
        sunIcon.classList.remove('theme-icon-hidden');  // Tampilkan Sun

        // Mobile
        if (mobileMoonIcon && mobileSunIcon) {
            mobileMoonIcon.classList.add('theme-icon-hidden');
            mobileSunIcon.classList.remove('theme-icon-hidden');
        }
    }
}

// --- INITIAL STATE CHECK ---
// Penting: Pastikan icon yang benar muncul saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    
    // Check Mobile elements too if needed immediately on load
    const mobileSunIcon = document.getElementById('mobile-sun-icon');
    const mobileMoonIcon = document.getElementById('mobile-moon-icon');

    // Helper untuk set initial state agar tidak DRY
    const setIcons = (showSun) => {
        if (showSun) {
            // Tampilkan Sun (artinya sedang Dark Mode)
            sunIcon?.classList.remove('theme-icon-hidden');
            moonIcon?.classList.add('theme-icon-hidden');
            mobileSunIcon?.classList.remove('theme-icon-hidden');
            mobileMoonIcon?.classList.add('theme-icon-hidden');
        } else {
            // Tampilkan Moon (artinya sedang Light Mode) -> INI YANG KAMU CARI
            sunIcon?.classList.add('theme-icon-hidden');
            moonIcon?.classList.remove('theme-icon-hidden');
            mobileSunIcon?.classList.add('theme-icon-hidden');
            mobileMoonIcon?.classList.remove('theme-icon-hidden');
        }
    };

    if (html.classList.contains('dark')) {
        // Sedang Dark Mode -> Tampilkan Sun
        setIcons(true);
    } else {
        // Sedang Light Mode -> Tampilkan Moon
        setIcons(false);
    }

    // --- GENERAL UI LOGIC ---
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) { // Safety check
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close Mobile Menu on Link Click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    // Scroll Animation Observer (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Update Cart UI function check
    if (typeof updateCartUI === 'function') {
        updateCartUI();
    }
});