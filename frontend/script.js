document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const clothingItemsContainer = document.getElementById('clothing-items');
    let items = []; 

    const fetchClothingItems = async () => {
        const url = "http://localhost:4040";
        try {
            const response = await fetch(`${url}/search/search`); 
            items = await response.json();
            displayItems(items); 
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const displayItems = (itemsToDisplay) => {
        clothingItemsContainer.innerHTML = itemsToDisplay.map(item => {
            const price = parseFloat(item.price.replace('$', '')) || 0;
            return `
                <div class="card h-80 bg-[#68c1f1] rounded-lg shadow-lg flex flex-col justify-between text-black">
                    <div class="w-full p-4 text-center">
                        <h3 class="text-xl font-semibold">${item.name}</h3>
                    </div>
                    <div class="flex-1 w-full bg-cover bg-center overflow-hidden">
                        <img src="http://localhost:4040/assets${item.image}" alt="${item.name}" class="w-full h-full object-cover"/>
                    </div>
                    <div class="w-full p-4 text-center bg-gray-800 text-white">
                        <span class="text-lg font-semibold">$${price.toFixed(2)}</span>
                    </div>
                </div>
            `;
        }).join('');
    };

    const matchesThreeConsecutiveLetters = (query, itemName) => {
        query = query.toLowerCase();
        itemName = itemName.toLowerCase();

        if (query.length < 3) return false;

        for (let i = 0; i <= query.length - 3; i++) {
            const querySubstring = query.substring(i, i + 3);
            if (itemName.includes(querySubstring)) {
                return true;
            }
        }
        return false;
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value;
        if (query.length >= 3) {
            const filteredItems = items.filter(item => matchesThreeConsecutiveLetters(query, item.name));
            displayItems(filteredItems);
        } else {
            displayItems(items); 
        }
    });

    fetchClothingItems(); 
});
