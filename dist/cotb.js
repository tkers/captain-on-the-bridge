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
    var ion = {
        name: "Ion cannon",
        flavor: "Nothing special, but gets the job done",
        cost: { kind: "SHAPE", values: [{ kind: "ODD" }] },
        damage: { kind: "SUM" }
    };
    var chargedLaser = {
        name: "Charged Laser",
        flavor: "Heavy duty laser. Needs time to charge, but does a lot of damage.",
        cost: { kind: "TOTAL", amount: 24 },
        damage: { kind: "FIXED", amount: 9 }
    };
    var missle = {
        name: "Medium-range missles",
        flavor: "Good 'ol missles to deal a good amount of damage",
        cost: {
            kind: "SHAPE",
            values: [
                { kind: "MIN", amount: 4 },
                { kind: "MIN", amount: 4 },
            ]
        },
        damage: { kind: "FIXED", amount: 6 }
    };

    var fighter = {
        name: "Fighter",
        flavor: "A light and versatile ship. Good for taking out cruiser class vessels.",
        attack: 5,
        defense: 3,
        speed: 4,
        moduleLimit: 3,
        health: 10,
        modules: [laser, ion]
    };
    var intercepter = {
        name: "Intercepter",
        flavor: "A fast but weak ship. Good for intercepting fighters and fleeing battles you can not win.",
        attack: 3,
        defense: 3,
        speed: 6,
        moduleLimit: 3,
        health: 10,
        modules: [laser]
    };
    var cruiser = {
        name: "Cruiser",
        flavor: "A simple but trustworthy star cruiser.",
        attack: 4,
        defense: 6,
        speed: 2,
        moduleLimit: 4,
        health: 10,
        modules: [laser, chargedLaser, missle]
    };

    var ensureArray = function (x) { return (x instanceof Array ? x : [x]); };
    var appendElems = function (par, elems) {
        return ensureArray(elems).forEach(function (e) { return par.appendChild(e); });
    };
    var setElems = function (par, elems) {
        par.innerHTML = "";
        appendElems(par, elems);
    };
    var createCard = function (html, onclick) {
        var elem = document.createElement("div");
        elem.className = "card";
        elem.onclick = onclick;
        elem.innerHTML = html;
        return elem;
    };
    var createSection = function (html) {
        var elem = document.createElement("section");
        elem.innerHTML = html;
        return elem;
    };
    var createDiceCost = function (val) {
        switch (val.kind) {
            case "ALL":
                return "<div class=\"dice\">*</div>";
            case "ODD":
                return "<div class=\"dice\">ODD</div>";
            case "EVEN":
                return "<div class=\"dice\">EVEN</div>";
            case "MIN":
                return "<div class=\"dice\">" + val.amount + "&gt;</div>";
            case "MAX":
                return "<div class=\"dice\">" + val.amount + "&lt;</div>";
        }
    };
    var createModuleCard = function (module) {
        var cost = module.cost.kind === "TOTAL"
            ? "<div class=\"dice\">+</div> (" + module.cost.amount + " remaining)"
            : module.cost.values.map(createDiceCost).join("");
        var html = "\n    <strong>" + module.name + "</strong>\n    <p>" + module.flavor + "</p>\n    " + cost + "\n  ";
        var card = createCard(html);
        return card;
    };
    var createShipSummaryCard = function (ship) {
        var html = "\n    <h2>Spacecraft: <strong>" + ship.name + "</strong></h2>\n    <div id=\"ship-health\">\n      <div class=\"bar on\" style=\"animation-delay: 0s\"></div>\n      <div class=\"bar on\" style=\"animation-delay: 0.2s\"></div>\n      <div class=\"bar on\" style=\"animation-delay: 0.4s\"></div>\n      <div class=\"bar on\" style=\"animation-delay: 0.6s\"></div>\n      <div class=\"bar\"></div>\n      <div class=\"bar\"></div>\n    </div>\n    <p>" + ship.flavor + "</p>\n    Attack: <strong>" + ship.attack + "</strong><br />\n    Defense: <strong>" + ship.defense + "</strong><br />\n    Speed: <strong>" + ship.speed + "</strong>\n  ";
        return createSection(html);
    };
    var createShipModulesCard = function (ship) {
        var html = "\n    <h2>\n      Modules <strong id=\"ship-modules-count\">" + ship.modules.length + "</strong>/<span>" + ship.moduleLimit + "</span>\n    </h2>\n  ";
        var sect = createSection(html);
        var mdiv = document.createElement("div");
        mdiv.id = "ship-modules";
        var modules = ship.modules.map(function (m) { return createModuleCard(m); });
        appendElems(mdiv, modules);
        appendElems(sect, mdiv);
        return sect;
    };
    var selectShip = function (ship) {
        setRootContent([createShipSummaryCard(ship), createShipModulesCard(ship)]);
        // document.getElementById("ship-name").textContent = $ship.name;
        // document.getElementById("ship-flavor").textContent = $ship.flavor;
        // document.getElementById("ship-atk").textContent = `${$ship.attack}`;
        // document.getElementById("ship-def").textContent = `${$ship.defense}`;
        // document.getElementById("ship-spd").textContent = `${$ship.speed}`;
        //
        // document.getElementById("ship-health").innerHTML = `
        // <div class="bar on" style="animation-delay: 0s"></div>
        // <div class="bar on" style="animation-delay: 0.2s"></div>
        // <div class="bar on" style="animation-delay: 0.4s"></div>
        // <div class="bar on" style="animation-delay: 0.6s"></div>
        // <div class="bar"></div>
        // <div class="bar"></div>
        // `;
        // document.getElementById(
        //   "ship-modules-count"
        // ).textContent = `${ship.modules.length}`;
        // document.getElementById(
        //   "ship-modules-max"
        // ).textContent = `${ship.moduleLimit}`;
        // const modules = ship.modules.map((m) => createModuleCard(m));
        // setElems(document.getElementById("ship-modules"), modules);
    };
    var createShipSelectionCard = function (ship) {
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
        var ship1 = createShipSelectionCard(fighter);
        var ship2 = createShipSelectionCard(intercepter);
        var ship3 = createShipSelectionCard(cruiser);
        var options = createdCentered([ship1, ship2, ship3]);
        setRootContent([title, options]);
    }
    var $root;
    function setRootContent(elems) {
        setElems($root, elems);
    }
    function start(root) {
        $root = root;
        pickShipPhase();
    }

    exports.start = start;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
