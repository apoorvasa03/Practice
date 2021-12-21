const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


 /* ------------------------for------------------------*/

  for(let i =0; i< companies.length; i++){
      console.log(companies[i].name)
  }

 /* ------------------------forEach------------------------*/

  companies.forEach(company => console.log(company.category))


 /* ------------------------for of------------------------*/
  for(let company of companies){
      console.log(company.start)
  }


  /* ------------------------filter------------------------*/

  //get 21 and older

  let canDrink = ages.filter(age => age >= 21)

  // filter retail companies

  let retailCompany = companies.filter(company => company.category === 'Retail')

   /* ------------------------map------------------------*/

   let companyNames = companies.map(company=> `${company.name} [${company.start} - ${company.end}]`);

   let ageMap = ages
            .map(age => Math.sqrt(age))
            .map(age=> age * 2)

    /* ------------------------sort------------------------*/    
    
    // sort companies with ages
    let sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1: -1))

    // sort ages

    let sortedAges = ages.sort((a, b) => a - b );

    
    /* ------------------------reduce------------------------*/   

    let ageSum = ages.reduce((total, age) =>{
        return total + age
    }, 0);

    let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

    console.log(totalYears)






