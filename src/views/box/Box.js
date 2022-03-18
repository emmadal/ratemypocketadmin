import React from 'react'
import { CButton, CCol, CRow, CCollapse } from '@coreui/react'

const Box = () => {
  const [showShow, setShowShow] = React.useState(false)
  const toggleShow = () => setShowShow(!showShow)

  return (
    <div className="box">
      <div className="d-flex flex-row justify-content-between">
        {/* <image src={image} alt="logo" className="img-fluid" width={80} height={80} /> */}
        <div className="text-center">
          <h5 className="text-white fw-bold">Typical interest</h5>
          <p className="text-white fw-bold">2.5% - 30%</p>
        </div>
        <div className="text-center">
          <h5 className="text-white fw-bold">Loans From</h5>
          <p className="text-white fw-bold">N1500</p>
        </div>
        <div className="text-center">
          <h5 className="text-white fw-bold">Repayments</h5>
          <p className="text-white fw-bold">N503.09</p>
        </div>
        <div className="text-center">
          <h5 className="text-white fw-bold">Total Cost</h5>
          <p className="text-white fw-bold">N2515.47</p>
        </div>
        <div className="text-center">
          <CButton color="light" size="lg" className="mybtn">
            Apply Now
          </CButton>
        </div>
      </div>

      <h5 className="text-center mb-0 more_info" onClick={toggleShow}>
        <i
          className={
            showShow ? 'fa fa-angle-up text-white mx-2' : 'fa fa-angle-down text-white mx-2'
          }
        ></i>
        <p className="fs-5 list-inline-item text-white fw-bold">More information</p>
      </h5>
      <span className="">
        <CCollapse visible={showShow}>
          <CRow>
            <CCol>
              <h6 className="fw-bold text-white">Free Bananas</h6>
              <p className="text-white text-wrap">
                Interest rate on Loan: 25.5%-28.5%* . One off payment for Insurance: 2.5% . One off
                payment of Management fees: 1% . Repayment Period: 1-12months . Penalty fee- 1% .
              </p>
            </CCol>
            <CCol>
              <h6 className="fw-bold text-white">Daily Newspapers</h6>
              <p className="text-white text-wrap">
                - Click ‘Apply’ on the home page - Answer a few simple questions - Receive a loan
                offer - Select amount and period - Accept loan offer - Enter bank details to receive
                your money
              </p>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <h6 className="fw-bold text-white">Eat More Fruit</h6>
              <p className="text-white text-wrap">Flexible, Personal</p>
            </CCol>
            <CCol>
              <h6 className="fw-bold text-white">Meet Penguins</h6>
              <p className="text-white text-wrap">5 minutes</p>
            </CCol>
          </CRow>
        </CCollapse>
      </span>
    </div>
  )
}

export default Box
