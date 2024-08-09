import css from './UserSettingsAvatar.module.css';
import defaultAvatarImage from '../../../../../assets/pictures/TrackerPage/avatarBase.jpg';

import { FiUpload } from "react-icons/fi";

const UserSettingsAvatar = ({ onChange, fileInputRef, preview }) => {
    return (
        <div className={css.avatarContainer}>
            <img
                className={css.avatar}
                src={preview ? preview : defaultAvatarImage}
                alt="Avatar"
                width="75"
                height="75"
            />
            <input
                type="file"
                id="uploadInput"
                accept="image/*"
                className={css.uploadInput}
                onChange={onChange}
                // onChange={(e) => {console.log("Selected file", e.target.files[0])} }
                ref={fileInputRef}
            />
            <label htmlFor="uploadInput" className={css.uploadLabel}>
                <FiUpload />
                <p className={css.uploadBtn}>Upload a photo</p>
            </label>
        </div>
    );
};
export default UserSettingsAvatar;
