import React from 'react'

function DashboardCard({icon,title,color,count}) {
    return (
        <>
            <div className="col-xl-4 col-md-6">
                <div className="card  dashnum-card text-white overflow-hidden" style={{background:color}}>
                    <span className="round small" />
                    <span className="round big" />
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="avtar avtar-lg">
                                    {icon}
                                </div>
                            </div>

                        </div>
                        <span className="text-white d-block f-34 f-w-500 my-2">{count}<i className="ti ti-arrow-up-right-circle opacity-50" /></span>
                        <p className="mb-0 opacity-50">{title}</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCard