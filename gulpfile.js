var gulp = require('gulp');
var replace = require('gulp-replace');

const langMatch = /\`?\'?\"?\[\@[\w]*\@\]\"?\'?\`?/g
const replaceLang = (match, p1, offset, string) =>{
  console.log('Found ' + match);
   
            var n = match.indexOf("[@");
    var m = match.indexOf("@]");
var key = match.slice(n+2,m)
  var single = match.search(/\'/)
    var cheo = match.search(/\`/)

  if(single == 0 || cheo == 0) { 
    return `lang('${key}')`
  }
    else return `{lang('${key}')}`;
 
}

gulp.task('changeUrl', function(done){
  console.log('reSvUrl')
  gulp.src(['screens/*.js'])
  .pipe(replace(`https://fitlive.glitch.me/`
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return `https://fitlivesv.liti.me/`;
    }))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('undoUrl', function(done){
  console.log('undoSvUrl')
  gulp.src(['screens/*.js'])
  .pipe(replace(`https://fitlivesv.liti.me/`
                    ,
                     `https://fitlive.glitch.me/`))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('changeUrl_web', function(done){
  console.log('reSvUrl')
  gulp.src(['web-build/**/*.js'])
  .pipe(replace(`https://fitlive.glitch.me/`
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return `https://server.fitlive.fit/`;
    }))
    .pipe(gulp.dest('web-build/'));
        done()

});
gulp.task('undoUrl_web', function(done){
  console.log('undoSvUrl')
  gulp.src(['web-build/**/*.js'])
  .pipe(replace(`https://server.fitlive.fit/`
                    ,
                     `https://fitlive.glitch.me/`))
    .pipe(gulp.dest('web-build/'));
        done()

});


gulp.task('SessionDetailScreen', function(done){
  console.log('SessionDetailScreen')
  gulp.src(['draftbit/screens/SessionDetailScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`styles.ButtonJl,`
                    ,
                     `styles.ButtonJl, data && data['show_session_confirm']? "":{ display: "none" },`))
    .pipe(replace(`styles.ButtonfT,`
                    ,
                     `styles.ButtonfT, data && data['show_session_cancel']? "":{ display: "none" },`))
    .pipe(gulp.dest('screens/'));
    done()
});

gulp.task('AppNavigator', function(done){
  console.log('AppNavigator new')
  gulp.src(['draftbit/AppNavigator.js'])
    .pipe(replace(`<NavigationContainer>`
                    ,function(match, p1, offset, string) {
          console.log('Found ' + match);
      return `<NavigationContainer linking={linking}>`;
    }))
    .pipe(replace(`const Tab = createBottomTabNavigator();`
                    ,function(match, p1, offset, string) {
          console.log('Found ' + match);
      return `const Tab = createBottomTabNavigator();
      const config = {
  screens: {CreateAccountScreen:'register',BlankScreen:'blank'},
};

const linking = {
  prefixes: ['https://web.fitlive.fit', 'http://localhost:19006'],
  config,
};`;
    }))
    .pipe(gulp.dest('./'));
        done()

});




gulp.task('CancelBookingScreen', function(done){
  console.log('CancelBookingScreen')
  gulp.src(['draftbit/screens/CancelBookingScreen.js'])
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ListofColleagesScreen', function(done){
  console.log('ListofColleagesScreen')
  gulp.src(['draftbit/screens/ListofColleagesScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
 
gulp.task('AddCoachScreen', function(done){
  console.log('AddCoachScreen new')
  gulp.src(['draftbit/screens/AddCoachScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('AddClientScreen', function(done){
  console.log('AddClientScreen')
  gulp.src(['draftbit/screens/AddClientScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
  .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ClientEditScreen', function(done){
  console.log('ClientEditScreen')
  gulp.src(['draftbit/screens/ClientEditScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
  .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
//
gulp.task('ClientDetailScreen', function(done){
  console.log('ClientDetailScreen')
  gulp.src(['draftbit/screens/ClientDetailScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
  .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ListofOrderScreen', function(done){
  console.log('ListofOrderScreen')
  gulp.src(['draftbit/screens/ListofOrderScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
  .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('ChangePasswordScreen', function(done){
  console.log('ChangePasswordScreen')
  gulp.src(['draftbit/screens/ChangePasswordScreen.js'])
    .pipe(replace(`import * as AsyncStorage from '@react-native-community/async-storage';`
                    ,
                     `import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('CreateAccountScreen', function(done){
  console.log('CreateAccountScreen')
  gulp.src(['draftbit/screens/CreateAccountScreen.js'])
    .pipe(replace(`import * as AsyncStorage from '@react-native-community/async-storage';`
                    ,
                     `import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('LoginWithEmailScreen', function(done){
  console.log('LoginWithEmailScreen')
  gulp.src(['draftbit/screens/LoginWithEmailScreen.js'])
    .pipe(replace(`import * as AsyncStorage from '@react-native-community/async-storage';`
                    ,
                     `import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch
                    ,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('LogOutScreen', function(done){
  console.log('LogOutScreen')
  gulp.src(['draftbit/screens/LogOutScreen.js'])
    .pipe(replace(`import * as AsyncStorage from '@react-native-community/async-storage';`
                    ,
                     `import AsyncStorage from '@react-native-async-storage/async-storage';`))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('MyCalendarScreen', function(done){
  console.log('MyCalendarScreen')
  gulp.src(['draftbit/screens/MyCalendarScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`const [date_start, setDate_start] = React.useState(undefined);`
                    ,
                     `const [date_start, setDate_start] = React.useState(Date.now());`))
    .pipe(replace(/<Container([\s\S]*)searchCoach([\s\S]*)\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={searchCoach}
        style={{ height: 30, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSearchCoach(itemValue)}
      >
     
        <Picker.Item label="Filter by" value="undefined" />
        {data && data['selectCoach'].map(prop => {
         return (
         <Picker.Item label={prop.coachName} value={prop.coachId} />
         );
      })}
      </Picker>`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('EditCoachScreen', function(done){
  console.log('EditCoachScreen')
  gulp.src(['draftbit/screens/EditCoachScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {lang} from '../config/config';                      
`)).pipe(replace(langMatch,replaceLang))

    .pipe(replace(/<Container([\s\S]*)setLocationAssign([\s\S]*)\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={locationAssign}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setLocationAssign(itemValue)}
      >
     
        <Picker.Item label="Select an option" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>`}))
    .pipe(gulp.dest('screens/'));
        done()

});

                    


gulp.task('SettingScreen', function(done){
  console.log('SettingScreen')
  gulp.src(['draftbit/screens/SettingScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`{'Last update: Today'}`
                    ,
                     `{'Last update: ${new Date()}'}
`)).pipe(gulp.dest('screens/'));
        done()

});

gulp.task('SettingLanguageScreen', function(done){
  console.log('SettingLanguageScreen')
  gulp.src(['draftbit/screens/SettingLanguageScreen.js'])
  .pipe(replace(`import * as AsyncStorage from '@react-native-community/async-storage';`
                    ,
                     `import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('BusinessSettingScreen', function(done){
  console.log('BusinessSettingScreen')
  gulp.src(['draftbit/screens/BusinessSettingScreen.js'])
   .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('HomepageAdminScreen', function(done){
  console.log('HomepageAdminScreen')
  gulp.src(['draftbit/screens/HomepageAdminScreen.js'])
    .pipe(replace(`style={styles.Touchable_7U}`
                    ,function(match, p1, offset, string) {
          console.log('1 Found ' + match);
      return `style={data && data['permission_session_create']  == false?{ display: "none" }:styles.Touchable_7U}`;
    }))

    .pipe(replace(`style={styles.Touchablerj}`
                    ,
                     `style={data && data['permission_client_create']  == false?{ display: "none" }:styles.Touchablerj}`))
    .pipe(replace(`style={styles.TouchableCr}`
                    ,
                     `style={data && data['permission_client_create']  == false?{ display: "none" }:styles.TouchableCr}`))
    .pipe(replace(`style={styles.TouchableNM}`
                    ,function(match, p1, offset, string) {
          console.log('2 Found ' + match);
      return `style={data && data['permission_colleage_create']  == false?{ display: "none" }:styles.TouchableNM}`;
    })
                     )
    .pipe(replace(`style={styles.Touchablelm}`
                    ,
                     `style={data && data['permission_location_create']  == false?{ display: "none" }:styles.Touchablelm}`))
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
                     import webHelper from '../config/webHelper';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
    done()
});

gulp.task('ListofClientScreen', function(done){
  console.log('ListofClientScreen')
  gulp.src(['draftbit/screens/ListofClientScreen.js'])
   .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('SelectaClientScreen', function(done){
  console.log('SelectaClientScreen')
  gulp.src(['draftbit/screens/SelectaClientScreen.js'])
   .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('SelectLocationScreen', function(done){
  console.log('SelectLocationScreenSelectLocationScreen')
  gulp.src(['draftbit/screens/SelectLocationScreen.js'])
   .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('SelectaTimeScreen', function(done){
  console.log('SelectaTimeScreen')
  gulp.src(['draftbit/screens/SelectaTimeScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,800})sessionType([\s\S]{1,500})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={sessionType}
        style={{ height: 30, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSessionType(itemValue)}
      >
              <Picker.Item label="Choose" value="undefined" />

        <Picker.Item label="PT" value="PT" />
        <Picker.Item label="Stretching" value="Stretching" />
        <Picker.Item label="Kickfit" value="Kickfit" />

      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,800})repeatType([\s\S]{1,500})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={repeatType}
        style={{ height: 30, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setRepeatType(itemValue)}
      >
              <Picker.Item label="No" value="undefined" />

        <Picker.Item label="Daily" value="Daily" />
        <Picker.Item label="Weekly" value="Weekly" />

      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,800})locationId([\s\S]{1,500})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={locationId}
        style={{ height: 60, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setLocationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ListofSessionAdminScreen', function(done){
  console.log('ListofSessionAdminScreen')
  gulp.src(['draftbit/screens/ListofSessionAdminScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_locationId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_locationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_coachId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_coachId(itemValue)}
      >
             
        <Picker.Item label="Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('InsightScreen', function(done){
  console.log('InsightScreen')
  gulp.src(['draftbit/screens/InsightScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_locationId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_locationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={filter_coachId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_coachId(itemValue)}
      >
             
        <Picker.Item label="Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('OrderCreateScreen', function(done){
  console.log('OrderCreateScreen')
  gulp.src(['draftbit/screens/OrderCreateScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';    
import { Picker } from '@react-native-picker/picker';

`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})coachAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={coachAssign}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setCoachAssign(itemValue)}
      >ß
             
        <Picker.Item label="Select Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})clientAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<Picker
        selectedValue={clientAssign}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setClientAssign(itemValue)}
      >
             
        <Picker.Item label="Select Client" value="undefined" />
        { data['item'].map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.clientId} />
         );
      })}
      </Picker>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});


gulp.task('LocationListScreen', function(done){
  console.log('LocationListScreen')
  gulp.src(['draftbit/screens/LocationListScreen.js'])
   .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('copyCrisp', function(done){
  console.log('copyCrisp')
  gulp.src(['web-build/index.html'])
   .pipe(replace(`></body>`
                    ,
                     `><script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="b1fd7049-886a-475f-90a4-a212e6cc2271";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
                     </body>
`))
    .pipe(gulp.dest('web-build/'));
        done()

});


 gulp.task('start', gulp.series(
  'EditCoachScreen',
  'AddClientScreen',
  'ClientEditScreen',
  'ClientDetailScreen',
  'AddCoachScreen',
  'SessionDetailScreen',
  'ListofSessionAdminScreen',
  'ListofClientScreen',
  'MyCalendarScreen',
  'LogOutScreen',
  'CancelBookingScreen',
  'HomepageAdminScreen',
  'LoginWithEmailScreen',
  'ChangePasswordScreen',
  'SettingScreen',
  'SettingLanguageScreen',
  'BusinessSettingScreen',
  'CreateAccountScreen',
  'ListofColleagesScreen',
  'SelectaClientScreen',
  'SelectaTimeScreen',
  'SelectLocationScreen',
  'OrderCreateScreen',
  'InsightScreen',
  'LocationListScreen',
  'ListofOrderScreen'
  ))

 gulp.task('copyfirebase', function(done){
  console.log('copyfirebase')
  gulp.src(['config/firebase-messaging-sw.js'])
    .pipe(gulp.dest('web-build/'));
        done()

});

 gulp.task('copyfb', gulp.series(
  'copyfirebase',
  'copyCrisp',
  ))



//code ios

gulp.task('MyCalendarScreen_ios', function(done){
  console.log('MyCalendarScreen')
  gulp.src(['draftbit/screens/MyCalendarScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import ModalSelector from 'react-native-modal-selector'
import {lang} from '../config/config';                      
`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`const [date_start, setDate_start] = React.useState(undefined);`
                    ,
                     `const [date_start, setDate_start] = React.useState(Date.now());`))
    .pipe(replace(/<Container([\s\S]{1,1000})searchCoach([\s\S]{1,1000})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `
      <ModalSelector

                    data={data['selectCoach']}
keyExtractor={(data) => data.coachId}
labelExtractor={(data) => data.coachName}
                    onChange={(option)=>{setSearchCoach(option.coachId) }}
                    initValue={'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('EditCoachScreen_ios', function(done){
  console.log('EditCoachScreen')
  gulp.src(['draftbit/screens/EditCoachScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import ModalSelector from 'react-native-modal-selector'
import {lang} from '../config/config';                      
`)).pipe(replace(langMatch,replaceLang))

    .pipe(replace(/<Container([\s\S]{1,1000})setLocationAssign([\s\S]{1,1000})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<ModalSelector

                    data={data}
keyExtractor={(data) => data.locationId}
labelExtractor={(data) => data.location}
                    onChange={(option)=>{setLocationAssign(option.locationId) }}
                    initValue={locationAssign|| 'Select'} 

                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});


gulp.task('SelectaTimeScreen_ios', function(done){
  console.log('SelectaTimeScreen')
  gulp.src(['draftbit/screens/SelectaTimeScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import ModalSelector from 'react-native-modal-selector'
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(`const [number_session, setNumber_session] = React.useState(undefined);`
 ,
                     `const [number_session, setNumber_session] = React.useState(1);`))
    .pipe(replace(`const [total_member, setTotal_member] = React.useState(undefined);`
 ,
                     `const [total_member, setTotal_member] = React.useState(1);`))
    .pipe(replace(/<Container([\s\S]{1,1000})sessionType([\s\S]{1,1000})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return   `<ModalSelector

                    data={[{key:"PT","label":"PT"},{key:"Stretching","label":"Stretching"},{key:"Kickfit","label":"Kickfit"}]}
                    initValue={sessionType || 'Select'} 
                    onChange={(option)=>{ setSessionType(option.key) }}
                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
     .pipe(replace(/<Container([\s\S]{1,1000})locationId([\s\S]{1,1000})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return   `<ModalSelector

                    data={data}
keyExtractor={(data) => data.locationId}
labelExtractor={(data) => data.location}
                    onChange={(option)=>{setLocationId(option.locationId) }}
                    initValue={locationId || 'Select'} 

                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
      .pipe(replace(/<Container([\s\S]{1,1000})repeatType([\s\S]{1,1000})\/Container>/m
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return   `<ModalSelector

                    data={[{key:"Daily","label":"Daily"},{key:"Weekly","label":"Weekly"}]}
                    initValue={repeatType || 'Select'} 
                    onChange={(option)=>{ setRepeatType(option.key) }}
                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('ListofSessionAdminScreen_ios', function(done){
  console.log('ListofSessionAdminScreen')
  gulp.src(['draftbit/screens/ListofSessionAdminScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import ModalSelector from 'react-native-modal-selector'
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<ModalSelector
data={data}
keyExtractor={(data) => data.locationId}
labelExtractor={(data) => data.location}
                    onChange={(option)=>{setFilter_locationId(option.locationId) }}
                    initValue={'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `
      <ModalSelector

                    data={data}
keyExtractor={(data) => data.coachId}
labelExtractor={(data) => data.fullName}
                    onChange={(option)=>{setFilter_coachId(option.coachId) }}
                    initValue={'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>
      
`}))
    .pipe(gulp.dest('screens/'));
        done()

});
gulp.task('InsightScreen_ios', function(done){
  console.log('InsightScreen')
  gulp.src(['draftbit/screens/InsightScreen.js'])
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import ModalSelector from 'react-native-modal-selector'
import {lang} from '../config/config';
`))

    .pipe(replace(langMatch,replaceLang))
     .pipe(replace(/<Container([\s\S]{1,1000})filter_locationId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `<ModalSelector
data={data}
keyExtractor={(data) => data.locationId}
labelExtractor={(data) => data.location}
                    onChange={(option)=>{setFilter_locationId(option.locationId) }}
                    initValue={'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>
`}))
    .pipe(replace(/<Container([\s\S]{1,1000})filter_coachId([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `
      <ModalSelector

                    data={data}
keyExtractor={(data) => data.coachId}
labelExtractor={(data) => data.fullName}
                    onChange={(option)=>{setFilter_coachId(option.coachId) }}
                    initValue={'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>
      
`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('OrderCreateScreen_ios', function(done){
  console.log('OrderCreateScreen')
  gulp.src(['draftbit/screens/OrderCreateScreen.js'])
  .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
import {lang} from '../config/config';    
import ModalSelector from 'react-native-modal-selector'

`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(replace(/<Container([\s\S]{1,1000})coachAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `
      <ModalSelector

                    data={data}
keyExtractor={(data) => data.coachId}
labelExtractor={(data) => data.fullName}
                    onChange={(option)=>{setCoachAssign(option.coachId) }}
                    initValue={coachAssign || 'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>

`}))
    .pipe(replace(/<Container([\s\S]{1,1000})clientAssign([\s\S]{1,1000})\/Container>/g
                    ,function(match, p1, offset, string) {
      console.log('Found ' + match);
      return  `
      <ModalSelector

                    data={data['item']}
keyExtractor={(data) => data.clientId}
labelExtractor={(data) => data.fullName}
                    onChange={(option)=>{setClientAssign(option.coachId) }}
                    initValue={clientAssign || 'Select'} 
        style={{ width: '100%' }}

                    initValueTextStyle={{color: theme.colors.strong}}
/>

`}))
    .pipe(gulp.dest('screens/'));
        done()

});

gulp.task('HomepageAdminScreen_ios', function(done){
  console.log('HomepageAdminScreen')
  gulp.src(['draftbit/screens/HomepageAdminScreen.js'])
    .pipe(replace(`style={styles.Touchable_7U}`
                    ,function(match, p1, offset, string) {
          console.log('1 Found ' + match);
      return `style={data && data['permission_session_create']  == false?{ display: "none" }:styles.Touchable_7U}`;
    }))

    .pipe(replace(`style={styles.Touchablerj}`
                    ,
                     `style={data && data['permission_client_create']  == false?{ display: "none" }:styles.Touchablerj}`))
    .pipe(replace(`style={styles.TouchableCr}`
                    ,
                     `style={data && data['permission_client_create']  == false?{ display: "none" }:styles.TouchableCr}`))
    .pipe(replace(`style={styles.TouchableNM}`
                    ,function(match, p1, offset, string) {
          console.log('2 Found ' + match);
      return `style={data && data['permission_colleage_create']  == false?{ display: "none" }:styles.TouchableNM}`;
    })
                     )
    .pipe(replace(`style={styles.Touchablelm}`
                    ,
                     `style={data && data['permission_location_create']  == false?{ display: "none" }:styles.Touchablelm}`))
    .pipe(replace(`import React from 'react';`
                    ,
                     `import React from 'react';
                     import {lang} from '../config/config';
                     import appHelper from '../config/appHelper';
                     import * as Updates from 'expo-updates';

`))
    .pipe(replace(langMatch,replaceLang))
    .pipe(gulp.dest('screens/'));
    done()
});


 gulp.task('start_ios', gulp.series(
  'EditCoachScreen_ios',
  'AddClientScreen',
  'ClientEditScreen',
  'ClientDetailScreen',
  'AddCoachScreen',
  'SessionDetailScreen',
  'ListofSessionAdminScreen_ios',
  'ListofClientScreen',
  'MyCalendarScreen_ios',
  'LogOutScreen',
  'CancelBookingScreen',
  'HomepageAdminScreen_ios',
  'LoginWithEmailScreen',
  'ChangePasswordScreen',
  'SettingScreen',
  'SettingLanguageScreen',
  'BusinessSettingScreen',
  'CreateAccountScreen',
  'ListofColleagesScreen',
  'SelectaClientScreen',
  'SelectaTimeScreen_ios',
  'SelectLocationScreen',
  'OrderCreateScreen_ios',
  'InsightScreen_ios',
  'LocationListScreen',
  'ListofOrderScreen'
  ))



