"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	// Описати масив об’єктів – сайтів розроблених компанією
	const sites = [
		{
			company: "Glory",
			owner: "John Smith",
			sponsors: [
				{
					lastName: "Petriv",
					firstName: "Petro",
					investment: 30000,
				},
				{
					lastName: "Oreiro",
					firstName: "Huan",
					investment: 50000,
				},
				{
					lastName: "Nicolson",
					firstName: "Mikael",
					investment: 100000,
				},
			],
			year: 2002,
			cost: 3820,
		},
		{
			company: "Sunrise Corp",
			owner: "Emily Johnson",
			sponsors: [
				{
					lastName: "Koval",
					firstName: "Ivan",
					investment: 40000,
				},
				{
					lastName: "Lopez",
					firstName: "Carlos",
					investment: 65000,
				},
				{
					lastName: "Smith",
					firstName: "Robert",
					investment: 120000,
				},
			],
			year: 2010,
			cost: 45000,
		},
		{
			company: "Tech Innovations",
			owner: "Michael Brown",
			sponsors: [
				{
					lastName: "Lee",
					firstName: "Kevin",
					investment: 55000,
				},
				{
					lastName: "Patel",
					firstName: "Amit",
					investment: 80000,
				},
				{
					lastName: "Jackson",
					firstName: "Sandra",
					investment: 75000,
				},
			],
			year: 2015,
			cost: 61000,
		},
		{
			company: "Eco Solutions",
			owner: "Sarah Davis",
			sponsors: [
				{
					lastName: "Martin",
					firstName: "Linda",
					investment: 45000,
				},
				{
					lastName: "Wong",
					firstName: "Alice",
					investment: 78000,
				},
				{
					lastName: "Garcia",
					firstName: "Miguel",
					investment: 92000,
				},
			],
			year: 2018,
			cost: 53000,
		},
		{
			company: "Green Energy",
			owner: "David Wilson",
			sponsors: [
				{
					lastName: "Nguyen",
					firstName: "Minh",
					investment: 35000,
				},
				{
					lastName: "Adams",
					firstName: "Paul",
					investment: 95000,
				},
				{
					lastName: "Brown",
					firstName: "Clara",
					investment: 87000,
				},
			],
			year: 2005,
			cost: 4700,
		},
	]

	// Крок 1. Обчислення результатів

	// 1) загальну вартість усіх сайтів
	let totalSitesCost = sites.reduce((prevTotalCost, site) => prevTotalCost + site.cost, 0)

	// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
	let sitesNumberBefore2009 = sites.reduce((prevNum, site) => site.year > 2000 && site.year < 2009 ? prevNum + 1 : prevNum, 0)

	// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
	let sitesNumWithInvestGr100k = sites.reduce((prevNum, site) => {
		let siteInvest = site.sponsors.reduce((prevSum, sponsor) => prevSum + sponsor.investment, 0)
		return siteInvest > 100000 ? prevNum + 1 : prevNum
	}, 0)
	
	// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
	let sponsorsList = []
	for (const site of sites) {
		site.sponsors.forEach(sponsor => sponsorsList.push(`${sponsor.firstName} ${sponsor.lastName}`))
	}

	// 5) знайти рік, коли прибуток був найбільшим
	function getYearMaxSitesCost(arr) {
		let maxSitesCost = arr.reduce((prevMaxCost, site) => site.cost > prevMaxCost ? prevMaxCost = site.cost : prevMaxCost, 0)
		for (const site of arr) {
			if (site.cost === maxSitesCost) return site.year
		}
	}
	let yearMaxSiteCost = getYearMaxSitesCost(sites)

	// 6) упорядкувати список за спаданням прибутку
	let newSitesDescendCost = sites.sort((site1, site2) => site2.cost - site1.cost)
	console.log(newSitesDescendCost)

	// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартістю до 10000 і більше 10000
	let siteCostLess10k = sites.filter(site => site.cost < 10000)
	let siteCostMore10k = sites.filter(site => site.cost > 10000)
	console.log(siteCostLess10k)
	console.log(siteCostMore10k)

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<ul class="task-list">`)
	document.write(`<li class="task-item">1) Загальна вартість усіх сайтів: ${totalSitesCost}</li>`)
	document.write(`<li class="task-item">2) Кількість сайтів, що було зроблено між 2000 та 2009 рр.: ${sitesNumberBefore2009}</li>`)
	document.write(`<li class="task-item">3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000: ${sitesNumWithInvestGr100k}</li>`)
	document.write(`<li class="task-item">4) Загальний список усіх спонсорів: ${sponsorsList}</li>`)
	document.write(`<li class="task-item">5) Pік, коли прибуток був найбільшим: ${yearMaxSiteCost}</li>`)
	document.write(`<li class="task-item">6) Cписок за спаданням прибутку: у консолі</li>`)
	document.write(`<li class="task-item">6) Два окремі списки з копіями об’єктів, що містять сайти з вартістю до 10000 і більше 10000: у консолі</li>`)
	document.write(`</ul>`)
	document.write(`</div>`)
}
