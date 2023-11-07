/* Toto je třída Colour, která má konstruktor a metodu setHex. Konstruktor vytvoří novou instanci třídy Colour s počáteční hodnotou hex a odkazem na DOM element element. Vlastnost locked je nastavena na false jako výchozí hodnota. */
class Colour {
    // Konstruktor třídy Colour
	constructor(hex, element) {
		this.hex = hex; // Uložení hodnoty hex do vlastnosti this.hex
		this.element = element; // Uložení DOM elementu do vlastnosti this.element
		this.locked = false; // Inicializace vlastnosti locked na false (zamčené: false, odemčené: true)
	}
// Metoda pro nastavení hodnoty hex
	setHex(hex) {
		this.hex = hex; // Nastavení nové hodnoty hex
		this.element.style.backgroundColor = hex; // Nastavení barvy pozadí elementu na novou hodnotu hex
		this.element.querySelector(".colour-input").value = hex;
        // Nastavení hodnoty input prvku s třídou "colour-input" na novou hodnotu hex 
	}

    /* Metoda setHex slouží k nastavení nové hodnoty hex pro objekt Colour. Když je zavolána, aktualizuje vlastnost hex a změní barvu pozadí elementu na novou hodnotu hex. Také aktualizuje hodnotu vstupního prvku s třídou "colour-input" na novou hodnotu hex.

    Toto je základní vysvětlení tohoto kódu. Pokud máte další otázky nebo potřebujete podrobnější vysvětlení, dejte mi vědět. */

	setLocked(locked) {
		this.locked = locked; 
        // Nastaví vlastnost locked na zadanou hodnotu locked (true nebo false)


		if (locked) {  // Pokud je locked true
			this.element
				.querySelector(".lock-toggle")
				.classList.add("is-locked");
                // Přidá třídu "is-locked" k prvkům s třídou "lock-toggle"

        // Nastaví zdroj obrázku na "icons/lock-closed.svg"
			this.element
				.querySelector("img")
				.src = "icons/lock-closed.svg";
		} else { // Pokud je locked false
			this.element
				.querySelector(".lock-toggle")
				.classList.remove("is-locked");
                // Odebere třídu "is-locked" z prvků s třídou "lock-toggle"

            // Nastaví zdroj obrázku na "icons/lock-open.svg"
			this.element
				.querySelector("img")
				.src = "icons/lock-open.svg";
		}
	}
    /* Metoda setLocked slouží k nastavení stavu zamčení (locked) na zadanou hodnotu. Pokud je locked true, přidá třídu "is-locked" k prvkům s třídou "lock-toggle" a změní zdroj obrázku na "icons/lock-closed.svg" (což obvykle signalizuje, že barva je uzamčena). Pokud je locked false, odstraní tuto třídu z prvků a změní zdroj obrázku na "icons/lock-open.svg" (což obvykle signalizuje, že barva je odemčena).

    Tímto způsobem můžete ovládat stav zamčení pro objekt Colour. */

    // toggleLocked() Metoda:
	toggleLocked() {
		this.setLocked(!this.locked);
	}
    // Tato metoda slouží k přepínání stavu zamčení (locked). Když je volána, zavolá metodu setLocked s negací aktuální hodnoty this.locked. To znamená, že pokud byl objekt zamčený (hodnota this.locked byla true), tato metoda ho odemkne (nastaví this.locked na false), a naopak, pokud byl odemčený, zamkne ho (nastaví this.locked na true).

	generateHex() {
		if (this.locked) {
			return
		}
		
		const chars = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += chars[Math.floor(Math.random() * 16)];
		}
		
		this.setHex(color);
	}
/* Tato metoda generuje náhodnou HEX hodnotu barvy (pokud barva není zamčena). Zde je krok za krokem, co dělá:
Nejprve kontroluje, zda je barva zamčena. Pokud ano (this.locked je true), metoda ukončí své provádění pomocí return, a nic se nezmění.
Pokud barva není zamčena, metoda pokračuje. Vytvoří řetězec chars, který obsahuje všechny povolené znaky pro HEX kód (0-9 a A-F).
Inicializuje proměnnou color na "#", což je počáteční znak pro HEX kód barvy.
Použije smyčku for, která prochází šestkrát (protože HEX kód má šest znaků) a přidá náhodný znak z řetězce chars k proměnné color.
Nakonec volá metodu setHex(color), která nastaví novou náhodnou barvu objektu Colour. */

	copyToClipboard() {
		const input = this.element.querySelector(".colour-input");
		input.select();
		document.execCommand("copy");
		input.blur();
        /* Volání input.blur() v JavaScriptu odstraní fokus z daného vstupního prvku (elementu). Fokus je stav, kdy je jeden prvek na stránce aktivní a reaguje na uživatelské interakce, jako je psaní na klávesnici nebo stisknutí klávesy Enter.

        Když použijete input.blur(), to znamená, že vstupní prvek, který je momentálně označen (má fokus), ztratí fokus. To je užitečné, když chcete, aby jiné prvky na stránce mohly dostat fokus, nebo pokud chcete zrušit aktivaci klávesnicových událostí na tomto konkrétním elementu.

        Obvykle se input.blur() používá v situacích, kdy chcete přepnout fokus na jiný prvek nebo kdy chcete, aby se zastavilo zpracování událostí spojených s klávesnicí na daném elementu. */

		this.element.classList.add("copied");
		setTimeout(() => {
			this.element.classList.remove("copied");
		}, 1000);
	}
}
/* Tato metoda slouží k kopírování hodnoty barvy do schránky a zvýraznění objektu pro krátký čas, aby uživatel věděl, že byla hodnota zkopírována. Zde je krok za krokem, co dělá:
Získává odkaz na vstupní prvek s třídou "colour-input" v DOM (to je pravděpodobně textový vstup pro barvu).
Volá metodu select() na tomto prvku, což způsobí, že se všechny textové hodnoty v tomto prvku vyberou (zvýrazní se).
Použije document.execCommand("copy") k zkopírování vybrané hodnoty do schránky.
Volá input.blur() k zrušení výběru na vstupním prvku.
Přidá třídu "copied" k DOM elementu třídy Colour, který reprezentuje aktuální barvu.
Použije funkci setTimeout, aby po 1000 ms (1 sekundě) odstranil třídu "copied" z DOM elementu, což zruší vizuální zvýraznění barvy. */


 
// Tento kód se používá k inicializaci a správě několika objektů třídy Colour, které jsou zobrazeny na stránce. Tady je postupně krok za krokem, co tento kód dělá:
const colour_elements = document.querySelectorAll('.colours .colour');
//Tento řádek kódu vyhledá všechny elementy na stránce, které mají třídu "colour" a jsou uvnitř elementu s třídou "colours". Výsledkem je kolekce DOM elementů, které odpovídají této selekci.

const colours = [];
// Tímto řádkem je inicializován prázdný pole colours, do kterého budou později ukládány vytvořené objekty Colour.

for (let i = 0; i < colour_elements.length; i++) {
    // Toto je zahájení smyčky, která projde všechny nalezené elementy s třídou "colour" (které byly uloženy v colour_elements).
	const colour_element = colour_elements[i];
    // Pro každý nalezený element s třídou "colour" se vytvoří proměnná colour_element, která reprezentuje tento konkrétní element.

	const input = colour_element.querySelector(".colour-input");
    // Pro každý element se hledá další element s třídou "colour-input" uvnitř tohoto elementu. Tím se získá reference na textový vstup, který slouží k zadání HEX kódu barvy.
	const lock_toggle = colour_element.querySelector(".lock-toggle");
    //Zde se hledá element s třídou "lock-toggle" uvnitř každého elementu. Tím se získá reference na prvek, který může zamknout/odemknout barvu
	const copy_btn = colour_element.querySelector(".copy-hex");
    // Zde se hledá element s třídou "copy-hex" uvnitř každého elementu. Tím se získá reference na tlačítko, které slouží k kopírování HEX kódu do schránky

	const hex = input.value;
    // Zde se získá aktuální hodnota textového vstupu s třídou "colour-input", což je HEX kód barvy.

	const colour = new Colour(hex, colour_element);
    // Tímto řádkem se vytvoří nový objekt Colour s počátečním HEX kódem hex a DOM elementem colour_element. Tímto způsobem vytvoříte instanci třídy Colour pro každý element s třídou "colour".

	input.addEventListener('input', (e) => colour.setHex(e.target.value));
    // Přidává posluchače události 'input' na textový vstup. Když uživatel změní hodnotu vstupu (změní HEX kód), spustí se funkce colour.setHex(e.target.value), která aktualizuje barvu objektu Colour.
	lock_toggle.addEventListener('click', () => colour.toggleLocked());
    // Přidává posluchače události 'click' na prvek pro zamknutí/odemknutí. Když uživatel klikne na tento prvek, spustí se funkce colour.toggleLocked(), která přepíná stav zamčení objektu Colour.
	copy_btn.addEventListener('click', () => colour.copyToClipboard());
    // Přidává posluchače události 'click' na tlačítko pro kopírování. Když uživatel klikne na toto tlačítko, spustí se funkce colour.copyToClipboard(), která zkopíruje HEX kód do schránky a zvýrazní objekt na krátký čas.

	colour.generateHex();
    // Volá metodu generateHex() pro každý objekt Colour, což generuje náhodný HEX kód (pokud barva není zamčena) a aktualizuje ji.
	colours.push(colour);
    // Uloží vytvořený objekt Colour do pole colours, aby bylo možné s nimi později pracovat nebo je spravovat.
}
/* Celý tento kód provádí inicializaci a správu objektů Colour pro všechny elementy s třídou "colour" na stránce, což umožňuje uživatelům manipulovat s barvami, změnit je, zamknout/odemknout a kopírovat jejich HEX kódy. */

/* Tento kód přidává posluchače události na tlačítko s třídou "generator-button". Když uživatel klikne na toto tlačítko, spustí se kód uvnitř funkce, který generuje nové náhodné HEX kódy pro všechny barvy v poli colours. Zde je rozepsaný postup: */
document.querySelector(".generator-button").addEventListener("click", () => {
    // Tímto řádkem kódu je vyhledáno tlačítko na stránce s třídou "generator-button" a přidán posluchač události "click". Když uživatel klikne na toto tlačítko, spustí se kód uvnitř funkce, která následuje.
	for (let i = 0; i < colours.length; i++) {
    // Tímto začíná smyčka, která projde všechny objekty Colour uložené v poli colours.
		colours[i].generateHex();
    // Uvnitř smyčky pro každý objekt Colour se volá metoda generateHex(). To způsobí, že každá barva vygeneruje nový náhodný HEX kód (pokud není zamčena) a aktualizuje se na novou hodnotu. Tímto způsobem lze generovat nové náhodné barvy pro všechny objekty Colour, které jsou na stránce.
	}
});

document.addEventListener('keypress', (e) => {
    // Tento řádek přidává posluchače události 'keypress' na celý dokument (stránku). Když uživatel stiskne klávesu na klávesnici, spustí se kód uvnitř funkce, která následuje.
	if (e.code.toLowerCase() === "space") {
        //Uvnitř posluchače se provádí kontrola, zda klávesa, která byla stisknuta, má kód (identifikátor klávesy), který je ekvivalentní klávese "Space" (mezera). Klávesa "Space" je obvykle reprezentována jako "Space" nebo " " (prázdný řetězec).
		document.querySelector(".generator-button").click();
        //Pokud byla stisknuta klávesa "Space", tento řádek vyhledá tlačítko na stránce s třídou "generator-button" pomocí document.querySelector(".generator-button") a spustí kliknutí na toto tlačítko voláním .click(). To způsobí, že tlačítko se chová, jako by bylo kliknuto myší.
	}
})
/* Celkově tento kód poslouchá na klávesu "Space" a pokud je stisknuta, automaticky spustí kliknutí na tlačítko s třídou "generator-button". To může být užitečné, pokud chcete umožnit uživatelům generovat nové barvy stiskem mezerníku na klávesnici. */


window.addEventListener('load', () => {
    // Funkce, která změní barvu stránky na zadaný HEX kód
    function changeBackgroundColor(hexColor) {
        document.body.style.backgroundColor = hexColor;
    }
    // Posluchač události kliknutí na tlačítko s třídou 'try'
    const tryButton = document.querySelector('.try-hex');

    tryButton.addEventListener('click',() => {
        // Získáme HEX kód od uživatele, například přes prompt

        const hexColor = prompt('Enter the HEX code of the color (e.g. #RRGGBB):');

        // Zavoláme funkci pro změnu barvy stránky s tímto HEX kódem
        if (hexColor) { // Pokud uživatel neklikne na "Cancel" v promptu
            changeBackgroundColor(hexColor);
        } 
    });
});