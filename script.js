let slider = {
	slides: [
		'1175.jpg',
		'3737.webp',
		'NDI1MzV5MXNsV1RUY3JD.webp'
	], // Масив з назвами зображень
	i: 0, // Поточний індекс

	// Встановлення зображення як фон
	set: function (image) {
		document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
	},

	// Ініціалізація слайдера
	init: function () {
		this.set(this.slides[this.i]);
	},

	// Перемикання слайду вліво
	left: function () {
		this.i--;
		if (this.i < 0) this.i = this.slides.length - 1;
		this.set(this.slides[this.i]);
	},

	// Перемикання слайду вправо
	right: function () {
		this.i++;
		if (this.i == this.slides.length) this.i = 0;
		this.set(this.slides[this.i]);
	}
};

// Запуск слайдера після завантаження сторінки
window.onload = function () {
	slider.init(); // Ініціалізація слайдера

	// Автоматична зміна слайдів кожні 5 секунд
	setInterval(function () {
		slider.right();
	}, 5000);

	// Обробка натискання кнопок
	let btn1 = document.querySelector('.left');
	btn1.addEventListener('click', () => slider.left());

	let btn2 = document.querySelector('.right');
	btn2.addEventListener('click', () => slider.right());
};
