const expect = require('chai').expect;

const {
    Queue,
    LinkedList,
    BinarySearchTree,
    isPalindrome,
    growUp,
    sortByDni,
    decToHex,
} = require('../Repaso.js');

describe('Tests Repaso!!', function () {
    xdescribe('Linked Lists', function () {
        describe('EJERCICIO A', function () {
            let linkedList;
            beforeEach(() => {
                linkedList = new LinkedList();
                linkedList.add(15);
                linkedList.add(30);
                linkedList.add(22);
                linkedList.add(100);
            });

            xit('getHead deberia devolver el primer elemento de la linked list', () => {
                expect(linkedList.getHead()).to.equal(15);
            });
            it('getTail deberia devolver el ultimo elemento de la linked list', () => {
                expect(linkedList.getTail()).to.equal(100);
            });
            xit('search deberia devolver la posicion del elemento de la linked list buscado', () => {
                expect(linkedList.search(30)).to.equal(1);
                expect(linkedList.search(100)).to.equal(3);
                expect(linkedList.search(15)).to.equal(0);
            });
        });
    });

    describe('Recursion', function () {
        xdescribe('EJERCICIO B', function () {
            it('deberia devolver true si el numero es palidromo', () => {
                expect(isPalindrome(555)).to.equal(true);
                expect(isPalindrome(2002)).to.equal(true);
                expect(isPalindrome(35000000053)).to.equal(true);
                expect(isPalindrome(25455452)).to.equal(true);
            });
            it('deberia devolver false si el numero no es palindromo', () => {
                expect(isPalindrome(123)).to.equal(false);
                expect(isPalindrome(55667)).to.equal(false);
                expect(isPalindrome(400045)).to.equal(false);
                expect(isPalindrome(1000003)).to.equal(false);
            });
            it('deberia devolver null si el numero es menor o igual que 99 o es negativo o decimal', () => {
                expect(isPalindrome(-123)).to.equal(null);
                expect(isPalindrome(1.555)).to.equal(null);
                expect(isPalindrome(22)).to.equal(null);
                expect(isPalindrome(0)).to.equal(null);
            });
        });
    });

    xdescribe('Recursion y Stack', function () {
        describe('EJERCICIO C', function () {
            let queue;

            beforeEach(() => {
                queue = new Queue();
            });
            it('la funcion deberia dar vuelta el stack, Test 1', () => {
                queue.enqueue(1);
                queue.enqueue(2);
                queue.enqueue(3);
                queue.enqueue(4);
                expect(queue.reverseStack()[0]).to.equal(4);
                expect(queue.reverseStack()[1]).to.equal(3);
                expect(queue.reverseStack()[2]).to.equal(2);
                expect(queue.reverseStack()[3]).to.equal(1);
            });
            it('la funcion deberia dar vuelta el stack, Test 2', () => {
                queue.enqueue(12);
                queue.enqueue(33);
                queue.enqueue(22);
                queue.enqueue(4);
                expect(queue.reverseStack()[0]).to.equal(4);
                expect(queue.reverseStack()[1]).to.equal(22);
                expect(queue.reverseStack()[2]).to.equal(33);
                expect(queue.reverseStack()[3]).to.equal(12);
            });
        });
    });

    describe('Closures', function () {
        describe('EJERCICIO D', function () {
            it('growUp deberia devolver el String correspondiente', () => {
                expect(growUp()).to.equal('Pepe riene ahora 29 años');
                expect(growUp()).to.equal('Pepe riene ahora 30 años');
                expect(growUp()).to.equal('Pepe riene ahora 31 años');
                expect(growUp()).to.equal('Pepe riene ahora 32 años');
                expect(growUp()).to.equal('Pepe riene ahora 33 años');
            });
        });
    });

    xdescribe('Binary Search Tree', function () {
        describe('EJERCICIO E', () => {
            let bst;
            beforeEach(() => {
                bst = new BinarySearchTree(7);
            });

            it('getLeafs deberia devolver las hojas del arbol', () => {
                bst.insert(2);
                bst.insert(9);
                bst.insert(1);
                bst.insert(5);
                bst.insert(14);
                expect(bst.getLeafs()[0]).to.equal(1);
                expect(bst.getLeafs()[1]).to.equal(5);
                expect(bst.getLeafs()[2]).to.equal(14);
            });
        });
    });
    xdescribe('Queue', function () {
        describe('EJERCICIO F', () => {
            let queue;
            beforeEach(() => {
                queue = new Queue();
            });

            it('clearAll deberia devolver y vaciar una queue', () => {
                queue.enqueue(1);
                queue.enqueue(2);
                queue.enqueue(3);
                queue.enqueue(4);
                queue.enqueue(5);
                queue.enqueue(6);
                queue.enqueue(7);
                queue.enqueue(8);
                queue.enqueue(9);
                queue.enqueue(10);
                queue.enqueue(11);
                queue.enqueue(12);
                queue.clearAll();
                expect(queue.size).to.equal(0);
            });
        });
    });

    xdescribe('Sort', function () {
        describe('EJERCICIO G', function () {
            const objetoPersonas = [
                {
                    dni: 40607080,
                    nombre: 'Carlitos',
                    apellido: 'Fulano',
                    edad: 22,
                    email: 'carlosfulano123@gmail.com',
                    username: 'xXElCrackXx',
                },
                {
                    dni: 23242526,
                    nombre: 'Maria',
                    apellido: 'Gonzalez',
                    edad: 48,
                    email: 'mary.gon@hotmail.com',
                    username: 'marymary321',
                },
                {
                    dni: 90919293,
                    nombre: 'Bartolomeo',
                    apellido: 'Simpson',
                    edad: 10,
                    email: 'bartsimpson@gmail.com',
                    username: 'elBarto',
                },
                {
                    dni: 76757473,
                    nombre: 'Doge',
                    apellido: 'De Hoz',
                    edad: 5,
                    email: 'soyelperrofavorito@yahoo.com.ar',
                    username: 'dogeOfficial',
                },
            ];
            it('deberia ordenar el array de objetos segun DNI', () => {
                const sortObj = sortByDni(objetoPersonas);
                expect(sortObj[0].dni).to.be(90919293);
                expect(sortObj[1].dni).to.be(76757473);
                expect(sortObj[2].dni).to.be(40607080);
                expect(sortObj[3].dni).to.be(23242526);
            });
        });
    });

    xdescribe('Desafio', function () {
        describe('Ejercicio H', function () {
            it('deberia convertir de decimal a hexadecimal', () => {
                let converted = decToHex(156555);
                expect(converted).to.equal('26 38 B');
                converted = decToHex(1000);
                expect(converted).to.equal('3E 8');
            });
            it('deberia agregar "#" y quitar los espacios', () => {
                let converted = decToHex(16777215, 'addHashtag');
                expect(converted).to.equal('#FFFFFF');
            });
        });
    });
});
