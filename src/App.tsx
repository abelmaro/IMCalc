import { useState } from 'react'

import useTheme from './hooks/useTheme'
import Header from './components/Header'
import ResultContainer from './components/ResultContainer'
import { useTranslation } from 'react-i18next'

import './App.sass'
import BMIForm from './components/BMIForm'
import { IBmi } from './interfaces/IBmi'

function App() {
  const { i18n } = useTranslation()
  const { isDarkTheme } = useTheme()
  const [bmi, setBmi] = useState<IBmi>({
    bmi: null,
    label: undefined
  })

  const resetBMI = () => {
    setBmi({
      bmi: null,
      label: undefined
    })
  }

  return (
    <>
      <Header />
      <div className={`container ${isDarkTheme ? 'container--dark' : 'container--light'}`}>
        {
          bmi.bmi === null &&
          <div className='container__left'>
            <div className='container__title'>
              <h1>{i18n.t('title')}</h1>
              <h2>{i18n.t('subtitle')}</h2>
            </div>
          </div>
        }
        <div className='container__right'>
          {
            bmi.bmi === null ?
              <><h2 className='container__right__title'>{i18n.t('subtitle')}</h2>
                <BMIForm bmi={bmi} setBmi={setBmi} />
              </>
              : <ResultContainer
                bmi={bmi.bmi}
                onReset={resetBMI}
                label={bmi.label}
              />
          }
        </div>
      </div>
    </>
  )
}

export default App
