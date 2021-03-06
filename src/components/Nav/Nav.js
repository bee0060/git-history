import m from 'mithril';
import styles from './Nav.css';

var Nav = module.exports = {
    controller: function() {
    },

    view: function(ctrl) {
        return m("nav", {class: styles.nav}, [
            m("ul", {class: styles.list}, [
            	m('li', {class: styles.item}, [
            		m('i.fa.fa-folder-o'),
            		'Git History'
            	]),
            	m('li', {class: styles.item}, [
            		m('i.fa.fa-file-text-o'),
            		'index.js'
            	])
            ])
        ]);
    }
};