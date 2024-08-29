document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const clothingItemsContainer = document.getElementById('clothing-items');

    const fetchClothingItems = async (query = '') => {
        const url = "http://localhost:4040";
        try {
            const response = await fetch(`${url}/search/search?q=${encodeURIComponent(query)}`);
            const items = await response.json();
            displayItems(items);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const displayItems = (items) => {
        clothingItemsContainer.innerHTML = items.map(item => {
            const price = parseFloat(item.price.replace('$', '')) || 0;
            return `
                <div class="card h-80 bg-[#68c1f1] rounded-lg shadow-lg flex flex-col justify-between text-black">
                    <!-- Name Section -->
                    <div class="w-full p-4 text-center">
                        <h3 class="text-xl font-semibold">${item.name}</h3>
                    </div>
                    
                    <!-- Image Section -->
                    <div class="flex-1 w-full bg-cover bg-center overflow-hidden">
                        <img src="http://localhost:4040/assets${item.image}" alt="${item.name}" class="w-full h-full object-cover"/>
                    </div>
                    
                    <!-- Price Section -->
                    <div class="w-full p-4 text-center bg-gray-800 text-white">
                        <span class="text-lg font-semibold">$${price.toFixed(2)}</span>
                    </div>
                </div>
        `;
        }).join('');
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        if (query.length >= 3) {
            fetchClothingItems(query);
        } else {
            clothingItemsContainer.innerHTML = '';
        }
    });
    fetchClothingItems();
});
