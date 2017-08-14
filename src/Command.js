import vscode from 'vscode';
import Editor from './Editor';
import ConfigurationLoader from './ConfigurationLoader';
import TokenFinder from './TokenFinder';
import ImportScanner from './ImportScanner';
import ImportOption from './ImportOption';
import OptionSelector from './OptionSelector';
import ImportStyleHeuristic from './ImportStyleHeuristic';
import ImportLocationSearcher from './ImportLocationSearcher';

export default class Command {
    static init(context) {
        var disposable = vscode.commands.registerCommand('node-import-resolver-code:import', () => Command.run());

        context.subscriptions.push(disposable);
    }

    static run() {
        const token = new TokenFinder().getToken();

        if (!token) {
            console.log('No token found');
            return;
        }

        return ConfigurationLoader.fromFilePath(Editor.getFilePath())
            .load()
            .then((config) => {
                return ImportScanner.create(Editor.getFilePath(), token, () => {}, config)
                    .start()
                    .then((imports) => imports.map(i => new ImportOption(i)))
                    .then((p) => OptionSelector.showOptions(p))
                    .then((option) => {
                        if (option) {
                            return Command.insertImport(option.import, config);
                        }
                    });
            });
    }

    static insertImport(newImport, config) {
        const style = ImportStyleHeuristic.fromSource(Editor.getText(), config).getStyle();
        const location = ImportLocationSearcher.fromSource(Editor.getText()).getLocation();
        const importLine = newImport.format(style);
        return Editor.insert(location, `${importLine}\n`);
    }
}