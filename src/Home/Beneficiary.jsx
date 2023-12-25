

const Beneficiary = ({ beneficiary }) => {

    const { userType, benefits, userImage } = beneficiary

    return (
        <div className="border-2 rounded-3xl p-5">
            <div className="space-y-6">
                <img className="rounded-3xl" src={userImage} alt="" />
                <div className="text-center font-bold text-xl">
                    <h1>{userType}</h1>
                </div>
                <p>{benefits}</p>
            </div>
        </div>
    );
};

export default Beneficiary;