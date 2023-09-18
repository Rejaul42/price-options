import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PricesOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Limited group classes",
            "24/7 access",
            "No contract"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Full access to gym facilities",
            "Unlimited group classes",
            "Personal trainer sessions",
            "Sauna and spa access",
            "One-year contract"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Student Membership",
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Student ID required",
            "Limited group classes",
            "Flexible hours"
          ],
          "price": 19.99
        }
      ]
      

    return (
        <div className="">
            <h1 className="text-center text-4xl font-bold mt-8">Best Price in the town</h1>
            <div className="grid md:grid-cols-3 gap-12 m-12 p-12">
                {
                    PricesOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;