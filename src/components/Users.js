import React from 'react';
import User from './User';

export default function Users(){
    return (
        <div className="right">
            <User
                src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                alt="man"
                name="MisterB"
            />
            <div className="users__block">
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                    alt="man"
                    name="Uasya"
                />
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                    alt="man"
                    name="Mister Fantastic"
                />
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                    alt="man"
                    name="LolKek Chebu Rek"/>
                <User
                    src="https://avatars.mds.yandex.net/get-pdb/1447163/fb46c8f8-622b-4f74-9234-9195acb610f8/s800"
                    alt="man"
                    name="Miss Stress"
                />
            </div>
        </div>
    )
}