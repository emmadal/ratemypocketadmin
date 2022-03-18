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
  CFormText,
} from '@coreui/react'

const OtherSettings = () => {
  const [value, setValue] = useState({
    name: '',
    altText: '',
    min_maxLoan: 0,
    loanValue: 0,
    min_maxTerm: 0,
    termStep: 0,
    rating: 0,
    min_maxInterest: 0,
    interestRate: 0,
    buttonLink: '',
    adminFees: 0,
    freeBananas: '',
    dailyNewspapers: '',
    meetPenguins: '',
    eatMoreFruit: '',
    exampleContent: '',
    hideBank: false,
    hideLink: false,
    sponsored: false,
  })

  const options = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
    { label: 'Four', value: 4 },
    { label: 'Five', value: 5 },
  ]

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
            <strong>Others Settings</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3 needs-validation pt-2" onSubmit={handleSubmit}>
              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Bank Columns Data</h6>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Interest</CFormLabel>
                    <CFormInput
                      type="text"
                      value={value.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Loans From:</CFormLabel>
                    <CFormInput
                      type="text"
                      value={value.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Repayments</CFormLabel>
                    <CFormInput
                      type="text"
                      value={value.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Total</CFormLabel>
                    <CFormInput
                      type="text"
                      value={value.name}
                      name="name"
                      onChange={handleChange}
                    />
                  </CCol>
                  <h6 className="fw-bold text-primary mt-3">Output Options</h6>
                  <div className="d-flex flex-row">
                    <CFormCheck
                      name="addfeestoprinciple"
                      type="checkbox"
                      label="Add fees to principle"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="beforecalculation"
                      label="Before calculations"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="aftercalculation"
                      label="After calculations"
                    />
                  </div>
                  <div>
                    <CFormCheck
                      name="showminandmaxonrepayments"
                      type="checkbox"
                      label="Show min and max on repayments and totals"
                    />
                    <CFormCheck name="nominalAPR" type="checkbox" label="Use nominal APR" />
                    <CFormCheck name="simpleinterest" type="checkbox" label="Use Simple Interest" />
                    <CRow className="g-3 align-items-center">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">Min/Max separator: </CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput
                          size="sm"
                          style={{ width: 50 }}
                          type="text"
                          name="minmaxseparator"
                        />
                      </CCol>
                    </CRow>
                    <CRow className="g-3 align-items-center mt-2">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">Info Link anchor: </CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormInput type="text" name="infolinkanchor" />
                      </CCol>
                    </CRow>
                    <CRow className="g-3 align-items-center mt-2">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">Reset column order </CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck name="resetcolumnorder" type="checkbox" />
                      </CCol>
                    </CRow>
                  </div>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Ratings</h6>
                  <CCol>
                    <CFormCheck
                      name="showratings"
                      type="checkbox"
                      label="Show ratings (display below logo)"
                    />
                  </CCol>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Apply Now Button</h6>
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom02">Label</CFormLabel>
                    <CFormInput type="text" name="applynowbtnlabel" />
                  </CCol>
                  <CCol md={4}>
                    <CFormLabel htmlFor="validationCustom02">Sponsored Link Label From:</CFormLabel>
                    <CFormInput type="text" name="sponsoredlinklabel" onChange={handleChange} />
                  </CCol>
                  <div className="mt-3">
                    <CFormCheck
                      name="applyonallbanks"
                      type="checkbox"
                      label="Hide apply now button on all banks"
                    />
                    <CFormCheck
                      name="applyonsinglepage"
                      type="checkbox"
                      label="Hide apply now button on single page"
                    />
                  </div>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Example Text Options</h6>
                  <CCol md={4}>
                    <CFormCheck type="checkbox" name="showexampletext" label="Show example text" />
                  </CCol>
                  <div className="d-flex flex-row mt-2">
                    <p className="fw-bold">Position: </p>
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="mainsection"
                      label="Main section"
                    />
                    <CFormCheck className="mx-2" type="radio" name="moreinfo" label="More Info" />
                  </div>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">More Info Settings</h6>
                  <div>
                    <CFormCheck
                      name="showmoreinfo"
                      type="checkbox"
                      label="Show more info(slide out below the bank data)"
                    />
                  </div>
                </CRow>
                <CRow className="g-3 align-items-center">
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">More information label: </CFormLabel>
                  </CCol>
                  <CCol xs="auto">
                    <CFormInput type="text" name="moreinformationlabel" />
                  </CCol>
                </CRow>
                <CRow className="mt-3">
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Info label 1</CFormLabel>
                    <CFormInput type="text" name="infolabel1" />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Info label 2:</CFormLabel>
                    <CFormInput type="text" name="infolabel2" />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Info label 3:</CFormLabel>
                    <CFormInput type="text" name="infolabel3" />
                  </CCol>
                  <CCol md={3}>
                    <CFormLabel htmlFor="validationCustom02">Info label 4:</CFormLabel>
                    <CFormInput type="text" name="infolabel4" />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  name="linkthereviewpage"
                  label="Link the review page"
                  className="mt-3"
                />
                <CRow className="g-3 align-items-center">
                  <CCol xs="auto">
                    <CFormLabel className="col-form-label">Review label: </CFormLabel>
                  </CCol>
                  <CCol xs="auto">
                    <CFormInput type="text" name="reviewlabel" />
                  </CCol>
                  <CCol xs="auto">
                    <CFormCheck
                      type="checkbox"
                      name="banknametolabel"
                      label="add bank name to label"
                    />
                  </CCol>
                </CRow>
                <CFormCheck
                  type="checkbox"
                  name="openlinkpagetab"
                  label="Open link in new page/tab"
                  className="mt-3"
                />
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Links</h6>
                  <div>
                    <CRow className="g-3 align-items-center">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">Logo: </CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck type="checkbox" name="nofollowlogo" label="No follow" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck
                          type="checkbox"
                          name="openinnewtablink1"
                          label="Open in new tab/page"
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <div>
                    <CRow className="g-3 align-items-center">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">Button:</CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck type="checkbox" name="nofollowbtn" label="No follow" />
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck
                          type="checkbox"
                          name="openinnewtablink2"
                          label="Open in new tab"
                        />
                      </CCol>
                    </CRow>
                  </div>
                  <div>
                    <CRow className="g-3 align-items-center">
                      <CCol xs="auto">
                        <CFormLabel className="col-form-label">URL query:</CFormLabel>
                      </CCol>
                      <CCol xs="auto">
                        <CFormCheck
                          type="checkbox"
                          name="urlquery"
                          label="Add loan amount, term and bank name to URL"
                        />
                      </CCol>
                    </CRow>
                  </div>
                </CRow>
              </div>

              <div className="border py-3 my-3">
                <CRow>
                  <h6 className="fw-bold text-primary">Output Options</h6>
                  <div className="d-flex flex-row mt-2">
                    <p className="fw-bold">Currency position: </p>
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="beforeamount"
                      label="Before amount"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="afteramount"
                      label="After amount"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className="fw-bold">Currency space: </p>
                    <CFormCheck
                      className="mx-2"
                      type="checkbox"
                      name="currencyspace"
                      label="Add space between currency symbol and amount"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className="fw-bold">Thousands separator:</p>
                    <CFormCheck className="mx-2" type="radio" name="noneseparator" label="None" />
                    <CFormCheck className="mx-2" type="radio" name="commaseparator" label="Comma" />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="periodseparator"
                      label="Period"
                    />
                    <CFormCheck className="mx-2" type="radio" name="spaceseparator" label="Space" />{' '}
                  </div>
                  <CFormText>The period separator changes de decimal to a comma</CFormText>
                  <div className="d-flex flex-row mt-3">
                    <p className="fw-bold">Decimals:</p>
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="nonedecimals"
                      label="None ($1234)"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="floatingdecimals"
                      label="Floating ($1234 or $1234.56)"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="floatingdecimals"
                      label="Always on ($1234.00 or $1234.56)"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className="fw-bold">Decimal Comma:</p>
                    <CFormCheck
                      className="mx-2"
                      type="checkbox"
                      name="showcommaondecimals"
                      label="Shows a comma on decimals"
                    />
                  </div>
                  <div className="d-flex flex-row">
                    <p className="fw-bold">Rounding:</p>
                    <CFormCheck className="mx-2" type="radio" name="nonerounding" label="None" />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="nearestten"
                      label="Nearest ten"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="nearesthundred"
                      label="Nearest hundred"
                    />
                    <CFormCheck
                      className="mx-2"
                      type="radio"
                      name="nearestthousand"
                      label="Nearest thousand"
                    />
                    <p className="text-muted">Use wit caution!</p>
                  </div>
                </CRow>
              </div>

              <div className="border p-2">
                <CButton className="mr-1" type="submit" color="primary" size="sm">
                  Save settings
                </CButton>
                <CButton className="mx-1" type="submit" color="primary" size="sm">
                  Reset
                </CButton>
                <CFormCheck
                  type="checkbox"
                  name="donotsanitize"
                  label="Do not sanitize ten"
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

export default OtherSettings
