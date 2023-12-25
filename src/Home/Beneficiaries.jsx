import { useEffect, useState } from "react";
import Beneficiary from "./Beneficiary";


const Beneficiaries = () => {

    const [beneficiaries, setBeneficiaries] = useState([])

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBeneficiaries(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center lg:w-[700px] mx-auto mb-10">
                <h1 className="mb-10 font-bold text-4xl">Diverse Beneficiaries</h1>
                <p>Discover how our platform caters to a wide array of professionals, enthusiasts, and learners across various industries.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {beneficiaries.map(beneficiary =>
                    <Beneficiary
                        key={beneficiary.id}
                        beneficiary={beneficiary}>
                    </Beneficiary>)}
            </div>
        </div>
    );
};

export default Beneficiaries;