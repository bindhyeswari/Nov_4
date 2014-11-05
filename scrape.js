// Scrape the data

// todo: Check undefined
document.addEventListener('DOMContentLoaded', function () {
    var tbody = document.getElementById('CompanylistResults').firstElementChild;
    var trs = Array.prototype.slice.call(tbody.getElementsByTagName('tr'));
    trs.splice(0, 1);
    var companies = [];
    for (var i = 0, len = trs.length; i < len; i+=2) {
        var tr = trs[i];
        var td1 = tr.firstElementChild;
        var symbolh3 = tr.getElementsByClassName('symbol_links')[0].firstElementChild;
        var obj = {
            name: td1.textContent,
            symbol: symbolh3.textContent.trim(),
            market_cap: tr.children[2].innerHTML === 'n/a' ?  null : tr.children[2].innerHTML,
            country: tr.children[4].innerHTML === 'n/a' ?  null : tr.children[4].innerHTML,
            ipo: tr.children[5].innerHTML === 'n/a' ?  null : tr.children[5].innerHTML,
            subsector: tr.children[6].innerHTML === 'n/a' ?  null : tr.children[6].innerHTML
        };
        companies.push(obj);
    }

    console.log(companies);
    console.log(JSON.stringify(companies));
});

