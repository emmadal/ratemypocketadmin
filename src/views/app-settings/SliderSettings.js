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
  const [data, setData] = useState({
    loanAmountMin1: 0,
    loanAmountMin2: 0,
    loanAmountMin3: 0,
    loanAmountMax1: 0,
    loanAmountMax2: 0,
    loanAmountMax3: 0,
    loanAmountStep1: 0,
    loanAmountStep2: 0,
    loanAmountStep3: 0,
    termMin1: 0,
    termMin2: 0,
    termMin3: 0,
    termMax1: 0,
    termMax2: 0,
    termMax3: 0,
    termStep1: 0,
    termStep2: 0,
    termStep3: 0,
    amountSliderLabel: '',
    currency_symbol: '',
    initial_position_term: 0,
    hide_amount_slider: false,
    termSliderLabel: '',
    termSlider_day_singular: 0,
    termSlider_month_singular: 0,
    termSlider_year_singular: 0,
    termSlider_day_plural: 0,
    termSlider_month_plural: 0,
    termSlider_year_plural: 0,
    hide_term_slider: false,
    initial_position_slider: 0,
    hide_buttons: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setData({ ...data, [name]: value })
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
                        <CFormInput
                          value={data.loanAmountMin1}
                          min="1"
                          name="loanAmountMin1"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          className="my-3"
                          min="1"
                          name="loanAmountMin2"
                          value={data.loanAmountMin2}
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          name="loanAmountMin3"
                          min="1"
                          value={data.loanAmountMin3}
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel className="text-center">Max</CFormLabel>
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.loanAmountMax1}
                          name="loanAmountMax1"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          min="1"
                          value={data.loanAmountMax2}
                          name="loanAmountMax2"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          value={data.loanAmountMax3}
                          min="1"
                          name="loanAmountMax3"
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                      <CCol md={4}>
                        <CFormLabel className="text-center">Step</CFormLabel>
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.loanAmountStep1}
                          name="loanAmountStep1"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          value={data.loanAmountStep2}
                          min="1"
                          name="loanAmountStep2"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          value={data.loanAmountStep3}
                          min="1"
                          name="loanAmountStep3"
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol md={6}>
                    <h6 className="fw-bold text-center text-primary my-3">Term</h6>
                    <CRow>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Min</CFormLabel>
                        <CFormInput
                          min="1"
                          name="termMin1"
                          value={data.termMin1}
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          className="my-3"
                          min="1"
                          name="termMin2"
                          value={data.termMin2}
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          name="termMin3"
                          min="1"
                          value={data.termMin3}
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Max</CFormLabel>
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termMax1}
                          name="termMax1"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          min="1"
                          value={data.termMax2}
                          name="termMax2"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          value={data.termMax3}
                          min="1"
                          name="termMax3"
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Step</CFormLabel>
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termStep1}
                          name="termStep1"
                          onChange={handleChange}
                        />
                        <CFormInput
                          className="my-3"
                          min="1"
                          value={data.termStep2}
                          name="termStep2"
                          onChange={handleChange}
                          type="number"
                        />
                        <CFormInput
                          min="1"
                          value={data.termStep3}
                          name="termStep3"
                          onChange={handleChange}
                          type="number"
                        />
                      </CCol>
                      <CCol md={3}>
                        <CFormLabel className="text-center">Term</CFormLabel>
                        <CFormInput type="text" disabled value="D" />
                        <CFormInput className="my-3" disabled value="M" />
                        <CFormInput type="text" disabled value="Y" />
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
                    <CFormInput
                      type="text"
                      value={data.amountSliderLabel}
                      name="amountSliderLabel"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Currency Symbol: </CFormLabel>
                    <CFormInput
                      type="text"
                      value={data.currency_symbol}
                      onChange={handleChange}
                      name="currency_symbol"
                    />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Initial postion: </CFormLabel>
                    <CFormInput
                      min="1"
                      type="number"
                      value={data.initial_position_term}
                      name="initial_position_term"
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  name="hide_amount_slider"
                  checked={data.hide_amount_slider}
                  value={data.hide_amount_slider}
                  onChange={handleChange}
                  label="Hide amount slider"
                  className="my-2"
                />
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Term Slider</h6>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Label: </CFormLabel>
                    <CFormInput
                      type="text"
                      name="termSliderLabel"
                      value={data.termSliderLabel}
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label text-center">
                      Period Labels singular:{' '}
                    </CFormLabel>
                    <CRow>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          placeholder="Days"
                          value={data.termSlider_day_singular}
                          name="termSlider_day_singular"
                          onChange={handleChange}
                        />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termSlider_month_singular}
                          name="termSlider_month_singular"
                          onChange={handleChange}
                          placeholder="Months"
                        />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termSlider_year_singular}
                          name="termSlider_year_singular"
                          onChange={handleChange}
                          placeholder="Years"
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label text-center">
                      Period Labels plural:{' '}
                    </CFormLabel>
                    <CRow>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termSlider_day_plural}
                          onChange={handleChange}
                          name="termSlider_day_plural"
                          placeholder="Day"
                        />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termSlider_month_plural}
                          onChange={handleChange}
                          name="termSlider_month_plural"
                          placeholder="Months"
                        />
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput
                          type="number"
                          min="1"
                          value={data.termSlider_year_plural}
                          onChange={handleChange}
                          name="termSlider_year_plural"
                          placeholder="Years"
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Initial postion: </CFormLabel>
                    <CFormInput
                      type="number"
                      min="1"
                      value={data.initial_position_slider}
                      name="initial_position_slider"
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  value={data.hide_term_slider}
                  checked={data.hide_term_slider}
                  onChange={handleChange}
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
                  value={data.hide_buttons}
                  checked={data.hide_buttons}
                  onChange={handleChange}
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
