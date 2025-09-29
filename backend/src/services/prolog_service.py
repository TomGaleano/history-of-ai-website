import pytholog as pl

class PrologService:
    def __init__(self):
        print("Initializing PrologService")
        self.kb = pl.KnowledgeBase("game")
        self.kb.from_file("src/services/prolog_facts.pl")

    def query(self, query_string):
        try:
            solutions = list(self.kb.query(pl.Expr(query_string)))
            if solutions:
                return {"solutions": [str(s) for s in solutions], "stdout": "", "stderr": ""}
            else:
                return {"solutions": [], "stdout": "false.", "stderr": ""}
        except Exception as e:
            return {"solutions": [], "stdout": "", "stderr": str(e)}

prolog_service = PrologService()

def get_prolog_service():
    return prolog_service