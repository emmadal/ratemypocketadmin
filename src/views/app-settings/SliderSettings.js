import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormCheck,
} from '@coreui/react'
import { amount_step, slider_step } from '../../utils/step_values'

const SliderSettings = () => {
  const [value, setValue] = useState({
    loanAmountMin1: 0,
    loanAmountMin2: 0,
    loanAmountMin3: 0,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const target = e.target
    const r = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setValue({ ...value, [name]: r })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Slider Settings</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation pt-2" onSubmit={handleSubmit}>
              <div className="border py-3 my-3">
                <CRow>
                  <CCol md={6}>
                    <h6 className="fw-bold text-center text-primary my-3">Loan Amount</h6>
                    <CRow>
                      <CCol md={4}>
                        <CFormLabel className="text-center">Min</CFormLabel>
                        <CFormInput name="name" onChange={handleChange} type="number" />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel className="text-center">Max</CFormLabel>
                        <CFormInput
                          type="text"
                          value={value.name}
                          name="name"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel className="text-center">Step</CFormLabel>
                        <CFormInput
                          type="text"
                          value={value.name}
                          name="name"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol md={6}>
                    <h6 className="fw-bold text-center text-primary my-3">Term</h6>
                    <CRow>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Min</CFormLabel>
                        <CFormInput name="name" onChange={handleChange} type="number" />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Max</CFormLabel>
                        <CFormInput
                          type="text"
                          value={value.name}
                          name="name"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Step</CFormLabel>
                        <CFormInput
                          type="text"
                          value={value.name}
                          name="name"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          name="name"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput name="name" onChange={handleChange} type="number" />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Term</CFormLabel>
                        <CFormInput
                          type="text"
                          value={value.name}
                          placeholder="D"
                          name="name"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          name="name"
                          placeholder="M"
                          onChange={handleChange}
                          type="text"
                        />
                        <CFormInput
                          name="name"
                          onChange={handleChange}
                          type="text"
                          placeholder="Y"
                        />
                      </CCol>
                    </CRow>
                  </CCol>

                  <h6 className="fw-bold text-primary mt-3">Amount Slider Step Values</h6>

                  <div className="d-flex flex-row flex-wrap text-center align-items-center my-3">
                    {amount_step.map((item) => (
                      <div key={item?.id} className="mx-2">
                        <p>{item.id}</p>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <h6 className="fw-bold text-primary">Term Slider Step Values</h6>

                  <div className="d-flex flex-row flex-wrap text-center align-items-center my-3">
                    {slider_step.map((item) => (
                      <div key={item?.id} className="mx-2">
                        <p>{item.id}</p>
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                  <p>
                    <strong className="fw-bold">Step value</strong> The values of each slider
                    position are given in the table above. Use the step numbers to set the initial
                    positions. These step numbers are also used in the bank data below to set the
                    min term and max term
                  </p>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow className="g-3 align-items-center">
                  <h6 className="fw-bold text-primary">Amount Slider</h6>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Label: </CFormLabel>
                    <CFormInput type="text" name="amount" placeholder="Amount" />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Currency Symbol: </CFormLabel>
                    <CFormInput type="text" name="currency_symbol" placeholder="N" />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Initial postion: </CFormLabel>
                    <CFormInput type="number" name="initial_position_term" placeholder="" />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  name="hide_amount_slider"
                  label="Hide amount slider"
                  className="my-2"
                />
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Term Slider</h6>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Label: </CFormLabel>
                    <CFormInput type="text" name="term" placeholder="Term" />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label text-center">
                      Period Labels singular:{' '}
                    </CFormLabel>
                    <CRow>
                      <CCol xs="auto">
                        <CFormInput type="text" name="day_singular" placeholder="day" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput type="text" name="month_singular" placeholder="Months" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput type="text" name="year_singular" placeholder="Years" />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label text-center">
                      Period Labels plural:{' '}
                    </CFormLabel>
                    <CRow>
                      <CCol xs="auto">
                        <CFormInput type="text" name="day_plural" placeholder="Day" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput type="text" name="month_plural" placeholder="Months" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput type="text" name="year_plural" placeholder="Years" />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Initial postion: </CFormLabel>
                    <CFormInput type="number" name="initial_position_slider" placeholder="" />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  name="hide_term_slider"
                  label="Hide term slider"
                  className="my-2"
                />
              </div>

              <div className="border p-2">
                <CButton className="mr-1" type="submit" color="primary" size="sm">
                  Save settings
                </CButton>

                <CFormCheck
                  type="checkbox"
                  name="hide_buttons"
                  label="Hide buttons (labels and values move to the ends of the slider)"
                  className="mt-2"
                />
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SliderSettings
