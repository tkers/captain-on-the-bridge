(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.COTB = {}));
}(this, (function (exports) { 'use strict';

    var laser = {
        name: "Standard Laser",
        flavor: "A simple but trustworthy laser cannon",
        cost: { kind: "SHAPE", values: [{ kind: "ALL" }] },
        damage: { kind: "FIXED", amount: 3 }
    };

    var fighter = {
        name: "Fighter",
        flavor: "A light and versatile ship. Good for taking out cruiser class vessels.",
        attack: 5,
        defense: 3,
        speed: 4,
        moduleLimit: 3,
        health: 10,
        modules: [laser, laser]
    };
    var intercepter = {
        name: "Intercepter",
        flavor: "A fast but weak ship. Good for intercepting fighters and fleeing battles you can not win.",
        attack: 3,
        defense: 3,
        speed: 6,
        moduleLimit: 3,
        health: 10,
        modules: [laser, laser]
    };
    var cruiser = {
        name: "Cruiser",
        flavor: "A simple but trustworthy star cruiser.",
        attack: 4,
        defense: 6,
        speed: 2,
        moduleLimit: 4,
        health: 10,
        modules: [laser, laser, laser]
    };

    var ensureArray = function (x) { return (x instanceof Array ? x : [x]); };
    var appendElems = function (par, elems) {
        return ensureArray(elems).forEach(function (e) { return par.appendChild(e); });
    };
    var createCard = function (html, onclick) {
        var elem = document.createElement("div");
        elem.className = "card";
        elem.onclick = onclick;
        elem.innerHTML = html;
        return elem;
    };
    var selectShip = function (ship) {
        document.getElementById("ship-name").textContent = ship.name;
        document.getElementById("ship-atk").textContent = "" + ship.attack;
        document.getElementById("ship-def").textContent = "" + ship.defense;
        document.getElementById("ship-spd").textContent = "" + ship.speed;
    };
    var createShipCard = function (ship) {
        var html = "\n    <strong>" + ship.name + "</strong>\n    <p>" + ship.flavor + "</p>\n    <table>\n      <tr>\n        <th>ATK</th>\n        <th>DEF</th>\n        <th>SPD</th>\n      </tr>\n      <tr>\n        <td>" + ship.attack + "</td>\n        <td>" + ship.defense + "</td>\n        <td>" + ship.speed + "</td>\n      </tr>\n    </table>\n    <button class=\"snd\">Launch!</button>\n  ";
        var card = createCard(html, function () { return selectShip(ship); });
        return card;
    };
    function createTitle(text) {
        var head = document.createElement("h2");
        head.textContent = text;
        return head;
    }
    function createdCentered(elems) {
        var cent = document.createElement("center");
        appendElems(cent, elems);
        return cent;
    }
    function pickShipPhase() {
        var title = createTitle("Choose your starship:");
        var ship1 = createShipCard(fighter);
        var ship2 = createShipCard(intercepter);
        var ship3 = createShipCard(cruiser);
        var options = createdCentered([ship1, ship2, ship3]);
        setRootContent([title, options]);
    }
    var root;
    function setRootContent(elems) {
        root.innerHTML = "";
        appendElems(root, elems);
    }
    function start(_root) {
        root = _root;
        pickShipPhase();
    }

    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
