'use strict';


require('./user/user.service');
require('./user/components/has.permission');
require('./user/components/create.view');
require('./user/components/user.list');

require('./session/services/session.service');
require('./session/components/session.list.component');
require('./session/components/session.map.component');
require('./session/components/session.graph.component');
require('./session/components/session.detail.component');
require('./session/components/session.tag.component');
require('./session/components/session.actions.component');
require('./session/components/session.sticky.component');
require('./session/components/session.export.pcap.component');
require('./session/components/session.export.csv.component');
require('./session/components/session.scrub.pcap.component');
require('./session/components/session.delete.component');
require('./session/components/session.send.component');
require('./session/components/session.info.component');
require('./session/components/session.field.component');
require('./session/components/session.field.menu.component');

require('./search/components/search.component');
require('./search/components/expression.typeahead');
require('./search/services/field.service');

require('./health/health.service');
require('./health/eshealth.component');

require('./config/config.service');

require('./help/help');

require('./settings/settings');

require('./files/files.service');
require('./files/files');

require('./stats/stats.service');
require('./stats/stats.component');
require('./stats/stats.nodes.component');
require('./stats/stats.es.component');

require('./connections/connections.component');
require('./connections/connections.service');
require('./connections/connections.nodepopup.component');
require('./connections/connections.linkpopup.component');

require('./spigraph/spigraph.component');
require('./spigraph/spigraph.service');
require('./spigraph/spigraph.row.component');