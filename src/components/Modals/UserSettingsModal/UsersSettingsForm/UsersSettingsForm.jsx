// import { useState } from 'react';
import CloseButton from 'src/components/REUSABLE/CloseButton/CloseButton';
import css from './userSettingsForm.module.css';
import Button from "src/components/REUSABLE/Button/Button";
import CustomInput from 'src/components/REUSABLE/Input/CustomInput';
// import { useDispatch, useSelector } from 'react-redux';
import { FiUpload } from "react-icons/fi";
import { FaExclamation } from "react-icons/fa";

const UsersSettingsForm = () => {
  // const onSubmit = async data => {
  //   const formData = new FormData();
  // };

  // const [file, setFile] = useState(null);
  // const dispatch = useDispatch();
  // const { uploading, photo, error } = useSelector((state) => state);

  const userEmail = "nadia10@gmail.com";


  return <>
    <div className={css.modalContainer}>
      <h2 className={css.titleModal}>Settings</h2>

      <div style={{ position: 'absolute', top: '40px', right: "40px" }}>
        <CloseButton />
      </div>

      <form>
        <div className={css.photoContainer}>
          <div className={css.userPhoto}>
            <img src="" alt="" />
          </div>
          {/* <input type="file" /> */}
          <button type="submit" className={css.uploadPhotoBtn}><FiUpload style={{ width: '18px', height: '18px', marginRight: '5px' }} />Upload a photo</button>
        </div>
      </form>
      <ul className={css.formContainer}>
        <li className={css.listItem}>
          <div className={css.inputContainer}>

            <label htmlFor='radio' className={css.labelCustom}>Your gender identity</label>
            <div id='radio' className={css.radioContainer}>
              <div className={css.radioInputWrap}>
                <input
                  type="radio"
                  id="woman"
                  value="woman"

                />
                <label
                  htmlFor="woman"
                  className={css.radio}
                >
                </label>
                <label
                  htmlFor="woman"
                >
                  Woman
                </label>
              </div>
              <div className={css.radioInputWrap}>
                <input
                  type="radio"
                  id="man"
                  value="man"

                />
                <label
                  htmlFor="man"
                  className={css.radio}
                >
                </label>
                <label
                  htmlFor="man"
                >
                  Man
                </label>
              </div>
            </div>
          </div>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor="username" className={css.labelCustom}>Your Name</label>
            <CustomInput label={false} inputName={"username"} id={"username"} />
          </div>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor="userEmail" className={css.labelCustom}>Email</label>
            <CustomInput label={false} inputName={"userEmail"} id={"userEmail"} inputType={"email"} placeHolder={userEmail} disabled />
          </div>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor='norma' className={css.labelCustom}>My daily norma</label>
            <div className={css.formulaWrapper}>
              <div>
                <p className={css.gender}>For woman:</p>
                <p className={css.formula}>V=(M*0,03) + (T*0,4)</p>
              </div>
              <div>
                <p className={css.gender}>For man:</p>
                <p className={css.formula}>V=(M*0,04) + (T*0,6)</p>
              </div>
            </div>

            <p className={css.info}>
              <span style={{ color: "#9BE1A0" }}>*</span> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
            </p>
          </div>
        </li>

        <li className={css.listItem}>
          <p className={css.active}><FaExclamation style={{ fill: "#9BE1A0" }} /> Active time in hours</p>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor="weight" className={css.labelCalculator}>Your weight in kilograms:</label>
            <CustomInput label={false} inputName={"weight"} id={"weight"} inputType={"number"} />
          </div>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor="time" className={css.labelCalculator}>The time of active participation in sports:</label>
            <CustomInput label={false} inputName={"time"} id={"time"} inputType={"number"} />
          </div>
        </li>

        <li className={css.listItem}>
          <p className={css.requiredNumber}>The required amount of water in liters per day: <span style={{ color: "#9BE1A0", fontWeight: 700 }}>{"  "}1.8L</span></p>
        </li>

        <li className={css.listItem}>
          <div className={css.inputContainer}>
            <label htmlFor="water" className={css.labelCustom}>Write down how much water you will drink:</label>
            <CustomInput label={false} inputName={"water"} id={"water"} inputType={"number"} />
          </div>
        </li>
      </ul>

      <div className={css.buttonWrapper}>
        <Button style={{ background: '#9BE1A0', fontWeight: 700 }}>Save</Button>
      </div>
    </div >
  </>;
};
export default UsersSettingsForm;
