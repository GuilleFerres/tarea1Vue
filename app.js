const app = Vue.createApp({
    data() {
        return {
            name: 'Guille',
            age: 34,
            image:'http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg',
            // enteredValue: '',
            list: []

        }
    },
    methods: {
        calculateAge() { // Alternativa
            return this.age + 5;
        },
        calculateRandom() {
            return Math.random();
        },
        addInput() {
            this.list.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
});

app.mount('#assignment');