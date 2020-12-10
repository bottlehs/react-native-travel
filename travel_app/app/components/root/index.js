import {connect} from 'react-redux';

import {getCurrentUrl} from '@mm-redux/selectors/entities/general';
import {getTheme} from '@mm-redux/selectors/entities/preferences';

import {getCurrentLocale} from 'app/selectors/i18n';
import {removeProtocol} from 'app/utils/url';

import Root from './root';

function mapStateToProps(state) {
    const locale = getCurrentLocale(state);

    return {
        theme: getTheme(state),
        currentUrl: removeProtocol(getCurrentUrl(state)),
        locale,
    };
}

export default connect(mapStateToProps)(Root);