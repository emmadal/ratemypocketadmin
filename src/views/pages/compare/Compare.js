import React, { useState } from 'react'
import { CCol, CContainer, CRow, CFormRange } from '@coreui/react'
import Box from 'src/views/box/Box'

const Compare = () => {
  const [range, setRange] = useState(100)
  const [rangeTerms, setRangeTerms] = useState(50)

  const onChange = (e) => setRange(e.target.value)
  const onChangeTerms = (e) => setRangeTerms(e.target.value)

  return (
    <div className="pt-5">
      <CContainer>
        <CRow className="">
          <CCol md={6}></CCol>
        </CRow>
        <CRow>
          <CCol md={6}>
            <div className="d-flex flex-row justify-content-between mt-5">
              <i className="fas fa-plus-circle fa-2x"></i>
              <h1 className="text-muted fs-3">Amount: N{range}</h1>
              <i className="fas fa-minus-circle fa-2x"></i>
            </div>
            <CFormRange
              id="customRange1"
              value={range}
              min="100"
              max="10000"
              step="100"
              onChange={onChange}
            />
          </CCol>

          <CCol md={6}>
            <div className="d-flex flex-row justify-content-between mt-5">
              <i className="fas fa-plus-circle fa-2x"></i>
              <h1 className="text-muted fs-3">Terms: {rangeTerms} months</h1>
              <i className="fas fa-minus-circle fa-2x"></i>
            </div>
            <CFormRange
              id="customRange1"
              value={rangeTerms}
              min="7"
              max="18"
              step="1"
              onChange={onChangeTerms}
            />
          </CCol>
        </CRow>
        <Box />
      </CContainer>
    </div>
  )
}

export default Compare
