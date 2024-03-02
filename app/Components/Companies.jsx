import CompanyCard from "./CompanyCard"
const companies = [1,2,3,4,5,6,7,8,9,10]
const Companies = () => {
  return (
    <div>
       {
        companies.map((e)=>{
            return(
                <div key={e} className="my-2">
                    <CompanyCard    />
                </div>
            )
        })
       }
    </div>
  )
}

export default Companies
