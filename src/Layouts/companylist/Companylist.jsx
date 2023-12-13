import React from 'react'
import { Company } from '../../Components'
import CompanyNamesobj from '../../Data/Comapnies'
export default function Companylist() {
  const heading_style = {color:'#00302f',margin: '5px auto',width:' 85vw'};
  function getNames(arr) {
    return arr.map(obj => obj.name);
  }
  const CompanyNames = getNames(CompanyNamesobj);
  return (
    <div>
<div className="heading" style={heading_style}>

<h1>Choose from the best tours for your holiday</h1>
    </div>
      {
CompanyNames.map(name=>

  <Company company_name={name} key={CompanyNames.indexOf(name)} ></Company>
)
      }
        
    </div>

  )
}
