"use client";

const InitSlider = () => {
    const noUiSlider = require("../../../vendor/nouislider/nouislider.min");
    const wNumb = require("../../../vendor/nouislider/wNumb.min");

    const valuesSlider = document.getElementById('values-slider');
    const valuesForSlider = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32];

    const valueFormat = {
        to: (value) => valuesForSlider[Math.round(value)],
        from: (value) => valuesForSlider.indexOf(Number(value)),
    };

    noUiSlider.create(valuesSlider, {
        start: 0,
        connect: 'lower',
        range: { min: 0, max: valuesForSlider.length - 1 },
        step: 2,
        tooltips: true,
        format: valueFormat,
        pips: { mode: 'steps', format: valueFormat },
    });
    valuesSlider.noUiSlider.set(5);

    const arbitraryValuesSlider = document.getElementById('multi-values-slider');
    const arbitraryValuesForSlider = ['MB', '256MB', '1GB', '8GB', '16GB', '32GB', 'GB'];

    const arbitraryValueFormat = {
        to: (value) => arbitraryValuesForSlider[Math.round(value)],
        from: (value) => arbitraryValuesForSlider.indexOf(value),
    };

    noUiSlider.create(arbitraryValuesSlider, {
        start: ['1GB', '16GB'],
        connect: true,
        range: { min: 0, max: arbitraryValuesForSlider.length - 1 },
        step: 1,
        tooltips: false,
        format: arbitraryValueFormat,
        pips: { mode: 'steps', format: arbitraryValueFormat, density: 50 },
    });

    const hideTooltipsSlider = document.getElementById('hide-tooltips');
    noUiSlider.create(hideTooltipsSlider, {
        start: 20,
        tooltips: true,
        connect: 'lower',
        range: { min: 0, max: 100 },
    });

    const selectInput = document.getElementById('select-input');
    for (let i = -20; i <= 40; i++) {
        const option = document.createElement("option");
        option.text = i;
        option.value = i;
        selectInput.appendChild(option);
    }

    const htmlInputSlider = document.getElementById('html-input');
    noUiSlider.create(htmlInputSlider, {
        start: [10, 30],
        connect: true,
        range: { min: -20, max: 40 },
    });

    const numberInput = document.getElementById('number-input');
    htmlInputSlider.noUiSlider.on('update', (values, handle) => {
        const value = values[handle];
        if (handle) {
            numberInput.value = value;
        } else {
            selectInput.value = Math.round(value);
        }
    });

    selectInput.addEventListener('change', function () {
        htmlInputSlider.noUiSlider.set([this.value, null]);
    });

    numberInput.addEventListener('change', function () {
        htmlInputSlider.noUiSlider.set([null, this.value]);
    });

    const primarySlider = document.getElementById('primary-slider');
    noUiSlider.create(primarySlider, {
        start: 40,
        connect: 'lower',
        range: { min: 0, max: 100 },
    });

    const secondarySlider = document.getElementById('secondary-slider');
    noUiSlider.create(secondarySlider, {
        start: 40,
        connect: 'lower',
        range: { min: 0, max: 100 },
    });

    const successSlider = document.getElementById('success-slider');
    noUiSlider.create(successSlider, {
        start: 40,
        connect: 'lower',
        range: { min: 0, max: 100 },
    });

    var dangerSlider = document.getElementById('danger-slider');

    noUiSlider.create(dangerSlider, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var warningSlider = document.getElementById('warning-slider');

    noUiSlider.create(warningSlider, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var infoSlider = document.getElementById('info-slider');

    noUiSlider.create(infoSlider, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var lightSlider = document.getElementById('light-slider');

    noUiSlider.create(lightSlider, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var darkSlider = document.getElementById('dark-slider');

    noUiSlider.create(darkSlider, {
        start: 40,
        connect: 'lower',
        range: {
            'min': 0,
            'max': 100
        }
    });

    var verticalSlider = document.getElementById('vertical-slider');

    noUiSlider.create(verticalSlider, {
        start: 20,
        connect: 'lower',
        orientation: "vertical",
        range: {
            'min': 0,
            'max': 100
        }
    });

    var resultElement = document.getElementById('result');
    var sliders = document.querySelectorAll('.verticalsliders');
    var colors = [0, 0, 0];

    sliders.forEach(function (slider, index) {

        noUiSlider.create(slider, {
            start: 127,
            connect: [true, false],
            orientation: "vertical",
            range: {
                'min': 0,
                'max': 255
            },
        });
        slider.noUiSlider.on('update', function () {

            colors[index] = slider.noUiSlider.get();

            var color = 'rgb(' + colors.join(',') + ')';

            resultElement.style.background = color;
            resultElement.style.color = color;
        });
    });

    var toggleSlider = document.getElementById('toggle-slider');

    noUiSlider.create(toggleSlider, {
        orientation: "vertical",
        start: 0,
        range: {
            'min': [0, 1],
            'max': 1
        },
        format: wNumb({
            decimals: 0
        })
    });

    toggleSlider.noUiSlider.on('update', function (values, handle) {
        if (values[handle] === '1') {
            toggleSlider.classList.add('off');
        } else {
            toggleSlider.classList.remove('off');
        }
    });

    var lockedState = false;
    var lockedValues = [60, 80];

    var slider1 = document.getElementById('slider-1');
    var slider2 = document.getElementById('slider-2');

    var lockButton = document.getElementById('lockbtn');
    var slider1Value = document.getElementById('val1');
    var slider2Value = document.getElementById('val2');


    lockButton.addEventListener('click', function () {
        lockedState = !lockedState;
        this.textContent = lockedState ? 'unlock' : 'lock';
    });

    function crossUpdate(value, slider) {
        if (!lockedState) return;
        var a = slider1 === slider ? 0 : 1;
        var b = a ? 0 : 1;
        value -= lockedValues[b] - lockedValues[a];
        slider.noUiSlider.set(value);
    }

    noUiSlider.create(slider1, {
        start: 20,
        connect: 'lower',
        range: {
            min: 10,
            max: 100
        }
    });

    noUiSlider.create(slider2, {
        start: 60,
        connect: 'lower',
        animate: false,
        range: {
            min: 50,
            max: 100
        }
    });

    slider1.noUiSlider.on('update', function (values, handle) {
        slider1Value.innerHTML = values[handle];
    });

    slider2.noUiSlider.on('update', function (values, handle) {
        slider2Value.innerHTML = values[handle];
    });

    function setLockedValues() {
        lockedValues = [
            Number(slider1.noUiSlider.get()),
            Number(slider2.noUiSlider.get())
        ];
    }

    slider1.noUiSlider.on('change', setLockedValues);
    slider2.noUiSlider.on('change', setLockedValues);

    slider1.noUiSlider.on('slide', function (values, handle) {
        crossUpdate(values[handle], slider2);
    });

    slider2.noUiSlider.on('slide', function (values, handle) {
        crossUpdate(values[handle], slider1);
    });

    var softSlider = document.getElementById('limit-slider');

    noUiSlider.create(softSlider, {
        start: 50,
        connect: 'lower',
        range: {
            min: 0,
            max: 100
        },
        pips: {
            mode: 'values',
            values: [40, 80],
            density: 2
        }
    });
    softSlider.noUiSlider.on('change', function (values, handle) {
        if (values[handle] < 20) {
            softSlider.noUiSlider.set(20);
        } else if (values[handle] > 80) {
            softSlider.noUiSlider.set(80);
        }
    });
};

export default InitSlider;